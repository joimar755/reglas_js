import { PrismaClient } from "@prisma/client";
import { rules } from "./rules.js"; // tu archivo rules.js

const prisma = new PrismaClient();

async function main() {
  // 1. Insertar facts fijos
  const factos = ["dolor_abdominal", "nauseas", "vomito", "diarrea", "fiebre"];
  await prisma.facts.createMany({
    data: factos.map((f) => ({ nombre: f })),
    skipDuplicates: true,
  });

  const factosDB = await prisma.facts.findMany();

  // 2. Insertar reglas
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    await prisma.rules.create({
      data: {
        nombre: `Regla ${i + 1}`,
        condicion: {
          create: rule.conditions.all.map((c) => ({
            operator: c.operator,
            value: c.value,
            factId: (() => {
              const fact = factosDB.find((f) => f.nombre === c.fact);
              if (!fact) {
                throw new Error(`Fact not found for: ${c.fact}`);
              }
              return fact.id;
            })(), // ✅ enlazamos fact existente
          })),
        },
        eventoRegla: {
          create: {
            type: rule.event.type,
            diagnostico: rule.event.params.mensaje,
          },
        },
      },
    });
  }

  console.log("✅ Reglas insertadas en la BD");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
