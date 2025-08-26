/*
  Warnings:

  - A unique constraint covering the columns `[reglaId]` on the table `EventPaciente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reglaId` to the `EventPaciente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."EventPaciente" ADD COLUMN     "reglaId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "EventPaciente_reglaId_key" ON "public"."EventPaciente"("reglaId");

-- AddForeignKey
ALTER TABLE "public"."EventPaciente" ADD CONSTRAINT "EventPaciente_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
