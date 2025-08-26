/*
  Warnings:

  - You are about to drop the column `PacienteId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `createAT` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `pacienteId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_PacienteId_fkey";

-- DropIndex
DROP INDEX "public"."Event_PacienteId_key";

-- DropIndex
DROP INDEX "public"."Event_reglaId_key";

-- AlterTable
ALTER TABLE "public"."Event" DROP COLUMN "PacienteId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pacienteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Paciente" DROP COLUMN "createAT",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "public"."Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
