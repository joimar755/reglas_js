/*
  Warnings:

  - A unique constraint covering the columns `[fact,operator,value,reglaId]` on the table `Condicion` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Condicion_fact_key";

-- DropIndex
DROP INDEX "public"."Condicion_operator_key";

-- DropIndex
DROP INDEX "public"."Condicion_value_key";

-- CreateIndex
CREATE UNIQUE INDEX "Condicion_fact_operator_value_reglaId_key" ON "public"."Condicion"("fact", "operator", "value", "reglaId");
