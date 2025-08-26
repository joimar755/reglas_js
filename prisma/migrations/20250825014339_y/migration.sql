/*
  Warnings:

  - You are about to drop the `EventPaciente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."EventPaciente" DROP CONSTRAINT "EventPaciente_pacienteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EventPaciente" DROP CONSTRAINT "EventPaciente_reglaId_fkey";

-- DropTable
DROP TABLE "public"."EventPaciente";

-- CreateTable
CREATE TABLE "public"."Diagnostico_Pacientes" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "eventReglaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Diagnostico_Pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diagnostico_Pacientes_eventReglaId_key" ON "public"."Diagnostico_Pacientes"("eventReglaId");

-- AddForeignKey
ALTER TABLE "public"."Diagnostico_Pacientes" ADD CONSTRAINT "Diagnostico_Pacientes_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Diagnostico_Pacientes" ADD CONSTRAINT "Diagnostico_Pacientes_eventReglaId_fkey" FOREIGN KEY ("eventReglaId") REFERENCES "public"."EventRegla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
