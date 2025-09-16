import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /*
   const eliminar = await prisma.rules.deleteMany();
   console.log(`✅ Se eliminaron ${eliminar.count} reglas de la BD`); 
    const eliminarCondiciones = await prisma.condicion.deleteMany();
    console.log(`✅ Se eliminaron ${eliminarCondiciones.count} condiciones de la BD`);
    const eliminarEventos = await prisma.eventRegla.deleteMany();
    console.log(`✅ Se eliminaron ${eliminarEventos.count} eventos de la BD`);
    const eliminarPacientes = await prisma.paciente.deleteMany();
    console.log(`✅ Se eliminaron ${eliminarPacientes.count} pacientes de la BD`);
    const eliminarFacts = await prisma.facts.deleteMany();
    console.log(`✅ Se eliminaron ${eliminarFacts.count} facts de la BD`);
    const eliminardiag = await prisma.diagnostico_Pacientes.deleteMany();
    console.log(`✅ Se eliminaron ${eliminardiag.count} facts de la BD`);
    */
   const eliminar = await prisma.role.create({
      data:{
        nombre:"Paciente"
      }
   });
   console.log(eliminar);

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());