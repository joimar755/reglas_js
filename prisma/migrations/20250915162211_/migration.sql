/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Recomendaciones` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `posibles_complicaciones` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recomendaciones_nombre_key" ON "public"."Recomendaciones"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "posibles_complicaciones_nombre_key" ON "public"."posibles_complicaciones"("nombre");
