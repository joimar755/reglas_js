import express from "express";
import { PrismaClient } from "@prisma/client";
import { Engine } from "json-rules-engine";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Reglas médicas
const rules = [
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
];

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

// 👉 Ruta para listar pacientes
app.get("/pacientes", async (req, res) => {
    const pacientes = await prisma.paciente.findMany();
    res.json(pacientes);
});

app.listen(3000, () => {
    console.log("✅ API corriendo en http://localhost:3000");
});
