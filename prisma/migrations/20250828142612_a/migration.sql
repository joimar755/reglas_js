/*
  Warnings:

  - You are about to drop the column `fact` on the `Condicion` table. All the data in the column will be lost.
  - You are about to drop the column `operator` on the `Condicion` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Condicion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reglaId]` on the table `Condicion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `all` to the `Condicion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Condicion_fact_reglaId_key";

-- AlterTable
ALTER TABLE "public"."Condicion" DROP COLUMN "fact",
DROP COLUMN "operator",
DROP COLUMN "value",
ADD COLUMN     "all" JSONB NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Condicion_reglaId_key" ON "public"."Condicion"("reglaId");
