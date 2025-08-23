/*
  Warnings:

  - You are about to drop the column `diagnostico` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `sintoma` on the `Paciente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Paciente" DROP COLUMN "diagnostico",
DROP COLUMN "sintoma",
ADD COLUMN     "email" TEXT;

-- CreateTable
CREATE TABLE "public"."rules" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Codiciones" (
    "id" SERIAL NOT NULL,
    "fact" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL,
    "reglaId" INTEGER NOT NULL,

    CONSTRAINT "Codiciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "reglaId" INTEGER NOT NULL,
    "PacienteId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_reglaId_key" ON "public"."Event"("reglaId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_PacienteId_key" ON "public"."Event"("PacienteId");

-- AddForeignKey
ALTER TABLE "public"."Codiciones" ADD CONSTRAINT "Codiciones_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_PacienteId_fkey" FOREIGN KEY ("PacienteId") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
