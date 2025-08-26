/*
  Warnings:

  - You are about to drop the `Condiciones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Condiciones" DROP CONSTRAINT "Condiciones_reglaId_fkey";

-- DropTable
DROP TABLE "public"."Condiciones";

-- CreateTable
CREATE TABLE "public"."Condicion" (
    "id" SERIAL NOT NULL,
    "fact" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL,
    "reglaId" INTEGER NOT NULL,

    CONSTRAINT "Condicion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Condicion" ADD CONSTRAINT "Condicion_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
