/*
  Warnings:

  - Added the required column `descripcion` to the `EventRegla` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."EventRegla" ADD COLUMN     "descripcion" TEXT NOT NULL;
