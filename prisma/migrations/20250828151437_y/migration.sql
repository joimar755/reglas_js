/*
  Warnings:

  - A unique constraint covering the columns `[reglaId,factId]` on the table `Condicion` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Condicion_reglaId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Condicion_reglaId_factId_key" ON "public"."Condicion"("reglaId", "factId");
