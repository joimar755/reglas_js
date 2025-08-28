/*
  Warnings:

  - A unique constraint covering the columns `[fact,reglaId]` on the table `Condicion` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Condicion_fact_operator_value_reglaId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Condicion_fact_reglaId_key" ON "public"."Condicion"("fact", "reglaId");
