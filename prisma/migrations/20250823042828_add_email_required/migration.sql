/*
  Warnings:

  - You are about to drop the `rules` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `email` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Codiciones" DROP CONSTRAINT "Codiciones_reglaId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_reglaId_fkey";

-- AlterTable
ALTER TABLE "public"."Paciente" ALTER COLUMN "email" SET NOT NULL;

-- DropTable
DROP TABLE "public"."rules";

-- CreateTable
CREATE TABLE "public"."Rules" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Rules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Codiciones" ADD CONSTRAINT "Codiciones_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
