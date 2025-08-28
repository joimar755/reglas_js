/*
  Warnings:

  - You are about to drop the column `all` on the `Condicion` table. All the data in the column will be lost.
  - Added the required column `factId` to the `Condicion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `operator` to the `Condicion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Condicion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Condicion" DROP COLUMN "all",
ADD COLUMN     "factId" INTEGER NOT NULL,
ADD COLUMN     "operator" TEXT NOT NULL,
ADD COLUMN     "value" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "public"."facts" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "facts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Condicion" ADD CONSTRAINT "Condicion_factId_fkey" FOREIGN KEY ("factId") REFERENCES "public"."facts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
