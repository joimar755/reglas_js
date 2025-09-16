/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Sintomas_relacionados` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sintomas_relacionados_nombre_key" ON "public"."Sintomas_relacionados"("nombre");
