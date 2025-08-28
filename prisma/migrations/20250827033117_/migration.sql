/*
  Warnings:

  - A unique constraint covering the columns `[fact]` on the table `Condicion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[operator]` on the table `Condicion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Condicion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Condicion_fact_key" ON "public"."Condicion"("fact");

-- CreateIndex
CREATE UNIQUE INDEX "Condicion_operator_key" ON "public"."Condicion"("operator");

-- CreateIndex
CREATE UNIQUE INDEX "Condicion_value_key" ON "public"."Condicion"("value");
