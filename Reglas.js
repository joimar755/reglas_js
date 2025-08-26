// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const data = [
    [true, true, true, true, true, "Gastroenteritis probable"],
    [true, true, true, true, false, "Intoxicación alimentaria probable"],
    [true, true, true, false, true, "Dolor abdominal + fiebre (alerta)"],
    [true, true, true, false, false, "Indeterminado / evaluar"],
    [true, true, false, true, true, "Gastroenteritis probable"],
    [true, true, false, true, false, "Indeterminado / evaluar"],
    [true, true, false, false, true, "Dolor abdominal + fiebre (alerta)"],
    [true, true, false, false, false, "Reflujo/Dispepsia"],
    [true, false, true, true, true, "Gastroenteritis probable"],
    [true, false, true, true, false, "Intoxicación alimentaria probable"],
    [true, false, true, false, true, "Dolor abdominal + fiebre (alerta)"],
    [true, false, true, false, false, "Indeterminado / evaluar"],
    [true, false, false, true, true, "Indeterminado / evaluar"],
    [true, false, false, true, false, "Indeterminado / evaluar"],
    [true, false, false, false, true, "Dolor abdominal + fiebre (alerta)"],
    [true, false, false, false, false, "Indigestión"],
    [false, true, true, true, true, "Gastroenteritis probable"],
    [false, true, true, true, false, "Intoxicación alimentaria probable"],
    [false, true, true, false, true, "Indeterminado / evaluar"],
    [false, true, true, false, false, "Indeterminado / evaluar"],
    [false, true, false, true, true, "Gastroenteritis probable"],
    [false, true, false, true, false, "Indeterminado / evaluar"],
    [false, true, false, false, true, "Indeterminado / evaluar"],
    [false, true, false, false, false, "Reflujo/Dispepsia"],
    [false, false, true, true, true, "Gastroenteritis probable"],
    [false, false, true, true, false, "Intoxicación alimentaria probable"],
    [false, false, true, false, true, "Indeterminado / evaluar"],
    [false, false, true, false, false, "Asintomático / observación"],
    [false, false, false, true, true, "Indeterminado / evaluar"],
    [false, false, false, true, false, "Asintomático / observación"],
    [false, false, false, false, true, "Asintomático / observación"],
    [false, false, false, false, false, "Asintomático / observación"],
  ];


  const facts = ["fiebre", "nauseas", "vomito", "diarrea", "dolorAbdominal"];

  for (let i = 0; i < data.length; i++) {
    const [fiebre, nauseas, vomito, diarrea, dolorAbdominal, diagnostico] = data[i];

    await prisma.rules.create({
      data: {
        nombre: `Caso ${i + 1}`,
        condicion: {
          create: facts.map((fact, idx) => ({
            fact,
            operator: "equal",
            value: data[i][idx],
          })),
        },
        eventoRegla: {
          create: {
            type: "diagnostico",
            diagnostico,
          },
        },
      },
    });
  }

  console.log("✅ Reglas insertadas correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
