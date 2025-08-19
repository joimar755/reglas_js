-- CreateTable
CREATE TABLE "public"."Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sintoma" TEXT NOT NULL,
    "createAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_nombre_key" ON "public"."Paciente"("nombre");
