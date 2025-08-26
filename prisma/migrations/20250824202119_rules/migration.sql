/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_pacienteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_reglaId_fkey";

-- DropTable
DROP TABLE "public"."Event";

-- CreateTable
CREATE TABLE "public"."EventRegla" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "reglaId" INTEGER NOT NULL,

    CONSTRAINT "EventRegla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EventPaciente" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventPaciente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventRegla_reglaId_key" ON "public"."EventRegla"("reglaId");

-- AddForeignKey
ALTER TABLE "public"."EventRegla" ADD CONSTRAINT "EventRegla_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventPaciente" ADD CONSTRAINT "EventPaciente_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
