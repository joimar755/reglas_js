/*
  Warnings:

  - You are about to drop the column `pacienteId` on the `Diagnostico_Pacientes` table. All the data in the column will be lost.
  - You are about to drop the `Paciente` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Medico_Id` to the `Diagnostico_Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PacienteId` to the `Diagnostico_Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Complicaciones_ID` to the `EventRegla` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Recomendacion_ID` to the `EventRegla` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Sintomas_ID` to the `EventRegla` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Diagnostico_Pacientes" DROP CONSTRAINT "Diagnostico_Pacientes_pacienteId_fkey";

-- AlterTable
ALTER TABLE "public"."Diagnostico_Pacientes" DROP COLUMN "pacienteId",
ADD COLUMN     "Medico_Id" INTEGER NOT NULL,
ADD COLUMN     "PacienteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."EventRegla" ADD COLUMN     "Complicaciones_ID" INTEGER NOT NULL,
ADD COLUMN     "Recomendacion_ID" INTEGER NOT NULL,
ADD COLUMN     "Sintomas_ID" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."Paciente";

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Role_Id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sintomas_relacionados" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Sintomas_relacionados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."posibles_complicaciones" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "posibles_complicaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Recomendaciones" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Recomendaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Historial" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "texto" TEXT NOT NULL,
    "resumenId" INTEGER,
    "sentimientoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Historial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Resumen" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Resumen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Entidad" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "historialId" INTEGER NOT NULL,

    CONSTRAINT "Entidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Traduccion" (
    "id" SERIAL NOT NULL,
    "idioma" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "historialId" INTEGER NOT NULL,

    CONSTRAINT "Traduccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sentimiento" (
    "id" SERIAL NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sentimiento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_key" ON "public"."Usuario"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_nombre_key" ON "public"."Role"("nombre");

-- AddForeignKey
ALTER TABLE "public"."Usuario" ADD CONSTRAINT "Usuario_Role_Id_fkey" FOREIGN KEY ("Role_Id") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventRegla" ADD CONSTRAINT "EventRegla_Sintomas_ID_fkey" FOREIGN KEY ("Sintomas_ID") REFERENCES "public"."Sintomas_relacionados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventRegla" ADD CONSTRAINT "EventRegla_Complicaciones_ID_fkey" FOREIGN KEY ("Complicaciones_ID") REFERENCES "public"."posibles_complicaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventRegla" ADD CONSTRAINT "EventRegla_Recomendacion_ID_fkey" FOREIGN KEY ("Recomendacion_ID") REFERENCES "public"."Recomendaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Diagnostico_Pacientes" ADD CONSTRAINT "Diagnostico_Pacientes_PacienteId_fkey" FOREIGN KEY ("PacienteId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Diagnostico_Pacientes" ADD CONSTRAINT "Diagnostico_Pacientes_Medico_Id_fkey" FOREIGN KEY ("Medico_Id") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Historial" ADD CONSTRAINT "Historial_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Historial" ADD CONSTRAINT "Historial_resumenId_fkey" FOREIGN KEY ("resumenId") REFERENCES "public"."Resumen"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Historial" ADD CONSTRAINT "Historial_sentimientoId_fkey" FOREIGN KEY ("sentimientoId") REFERENCES "public"."Sentimiento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Entidad" ADD CONSTRAINT "Entidad_historialId_fkey" FOREIGN KEY ("historialId") REFERENCES "public"."Historial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Traduccion" ADD CONSTRAINT "Traduccion_historialId_fkey" FOREIGN KEY ("historialId") REFERENCES "public"."Historial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
