import { PrismaClient } from "@prisma/client";
import { rules } from "./rules.js"; // tu archivo rules.js

const prisma = new PrismaClient();

async function main() {
  // 1. Insertar facts fijos
  const factos = ["dolor_lumbar", "dolor_miccion", "orina_con_sangre", "fiebre", "orina_frecuente"];
  await prisma.facts.createMany({
    data: factos.map((f) => ({ nombre: f })),
    skipDuplicates: true,
  });

  const factosDB = await prisma.facts.findMany();

  // 2. Insertar reglas
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    // Insertar o encontrar Sintomas relacionados
    let sintomasId = null;
    if (rule.event.params.sintomas_relacionados?.length) {
      const s = rule.event.params.sintomas_relacionados[0]; // primer síntoma
      const sintoma = await prisma.sintomas_relacionados.upsert({
        where: { nombre: s },   // nombre debe ser UNIQUE en el modelo
        update: {},
        create: { nombre: s },
      });
      sintomasId = sintoma.id;
    }

    // Insertar o encontrar Posibles complicaciones
    let complicacionesId = null;
    if (rule.event.params.posibles_complicaciones?.length) {
      const p = rule.event.params.posibles_complicaciones[0];
      const comp = await prisma.posibles_complicaciones.upsert({
        where: { nombre: p },  // nombre debe ser UNIQUE
        update: {},
        create: { nombre: p },
      });
      complicacionesId = comp.id;
    }

    // Insertar o encontrar Recomendaciones
    let recomendacionesId = null;
    if (rule.event.params.recomendaciones?.length) {
      const r = rule.event.params.recomendaciones[0];
      const rec = await prisma.recomendaciones.upsert({
        where: { nombre: r },  // nombre debe ser UNIQUE
        update: {},
        create: { nombre: r },
      });
      recomendacionesId = rec.id;
    }

    // Crear la regla con condiciones y evento
    await prisma.rules.create({
      data: {
        nombre: `Regla ${i + 1}`,
        condicion: {
          create: rule.conditions.all.map(c => ({
            operator: c.operator,
            value: c.value,
            factId: factosDB.find(f => f.nombre === c.fact)?.id,
          })),
        },
        eventoRegla: {
          create: {
            type: rule.event.type,
            diagnostico: rule.event.params.mensaje,
            descripcion: rule.event.params.descripcion || "",
            Sintomas_ID: sintomasId,
            Complicaciones_ID: complicacionesId,
            Recomendacion_ID: recomendacionesId,
          },
        },
      },
    });
  }

  console.log("✅ Reglas insertadas en la BD con síntomas, complicaciones y recomendaciones");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
