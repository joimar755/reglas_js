/*
  Warnings:

  - You are about to drop the `Codiciones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Codiciones" DROP CONSTRAINT "Codiciones_reglaId_fkey";

-- DropTable
DROP TABLE "public"."Codiciones";

-- CreateTable
CREATE TABLE "public"."Condiciones" (
    "id" SERIAL NOT NULL,
    "fact" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL,
    "reglaId" INTEGER NOT NULL,

    CONSTRAINT "Condiciones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Condiciones" ADD CONSTRAINT "Condiciones_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "public"."Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
