import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { Engine } from "json-rules-engine";
import { rules } from "./rules.js";
const app = express();
const prisma = new PrismaClient();
const engine = new Engine(rules);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



// Reglas médicas
/* const rules = [
    {
        conditions: {
            all: [
                { fact: "fiebre", operator: "equal", value: true },
                { fact: "tos", operator: "equal", value: true },
                { fact: "dificultadParaRespirar", operator: "equal", value: true },
            ],
        },
        event: {
            type: "diagnostico",
            params: { diagnostico: "neumonía" },
        },
    },
    {
        conditions: {
            all: [
                { fact: "fiebre", operator: "equal", value: true },
                { fact: "tos", operator: "equal", value: true },
                { fact: "dolorDeGarganta", operator: "equal", value: true },
            ],
        },
        event: {
            type: "diagnostico",
            params: { diagnostico: "faringitis" },
        },
    },
]; */

// 👉 Ruta para registrar paciente y evaluar diagnóstico
app.post("/pacientes", async (req, res) => {
  try {
    const { nombre, sintomas } = req.body;

    // Ejecutamos el motor de reglas
    const engine = new Engine(rules);
    const results = await engine.run(sintomas);

    let diagnostico = "No identificado";

    if (results.events.length > 0) {
      diagnostico = results.events[0].params.diagnostico;
    }

    // Guardamos al paciente con los síntomas en la BD
    const paciente = await prisma.paciente.create({
      data: {
        // guardamos los síntomas en JSON
        nombre,
        sintoma: JSON.stringify(sintomas),
        diagnostico
      },
    });

    return res.json({
      paciente
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar paciente" });
  }
});
app.post("/test", async (req, res) => {
  try {
    const { nombre, email, hechos } = req.body;

    // 1. Ejecutar reglas sobre los hechos
    const resultados = await engine.run(hechos);

    // 2. Crear o buscar paciente
    let paciente = await prisma.paciente.findUnique({ where: { email } });

    if (!paciente) {
      paciente = await prisma.paciente.create({
        data: { nombre, email },
      });
    }

    // 3. Verificar si se disparó un diagnóstico
    if (resultados.events.length === 0) {
      return res.status(200).json({
        mensaje: "Sin diagnóstico asociado",
        paciente,
      });
    }

    // 4. Tomar el primer diagnóstico disparado
    const evento = resultados.events[0];
    const diagnostico = evento.params.mensaje;

    // 5. Buscar EventRegla correspondiente
    const eventRegla = await prisma.eventRegla.findFirst({
      where: { diagnostico },
    });

    if (!eventRegla) {
      return res.status(400).json({ error: "No existe el diagnóstico en BD" });
    }

    // 6. Crear Diagnostico_Pacientes
    const diagPaciente = await prisma.diagnostico_Pacientes.create({
      data: {
        pacienteId: paciente.id,
        eventReglaId: eventRegla.id,
      },
    });

    const respuesta = {
      mensaje: "Paciente y diagnóstico guardados",
      paciente,
      diagnostico,
      diagPaciente,
      
    };

    console.log(respuesta); // solo loguea en consola
    res.status(201).json(respuesta); // manda al cliente



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error procesando diagnóstico" });
  }
});

// 👉 Ruta para listar pacientes
app.get("/pacientes", async (req, res) => {
  const pacientes = await prisma.paciente.findMany({
    include:{
      diagnosticos:true
    }
  });
  res.json(pacientes);
  console.log(pacientes);
});

app.listen(3000, () => {
  console.log("✅ API corriendo en http://localhost:3000");
});
