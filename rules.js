export const rules = [
  {
// Regla 1//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Sin evidencia de enfermedad",
        "descripcion": "El paciente no presenta síntomas relevantes asociados al sistema urinario.",
        "sintomas_relacionados": [],
        "posibles_complicaciones": [],
        "recomendaciones": [
          "Mantener hábitos de hidratación saludables",
          "Realizar controles médicos de rutina"
        ]
      }
    }
  },
  {
// Regla 2//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Dolor lumbar inespecífico",
        "descripcion": "El paciente presenta únicamente dolor lumbar sin otros síntomas urinarios.",
        "sintomas_relacionados": ["Dolor lumbar"],
        "posibles_complicaciones": ["Evolución hacia patología renal no detectada"],
        "recomendaciones": [
          "Descartar causas musculoesqueléticas",
          "Solicitar ecografía renal si el dolor persiste"
        ]
      }
    }
  },
  {
// Regla 3//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Cistalgia no infecciosa",
        "descripcion": "Molestias al orinar sin otros signos de infección o complicación.",
        "sintomas_relacionados": ["Dolor al orinar"],
        "posibles_complicaciones": ["Evolución a infección urinaria"],
        "recomendaciones": [
          "Aumentar ingesta de líquidos",
          "Observar evolución y realizar análisis de orina si persiste"
        ]
      }
    }
  },
  {
// Regla 4//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Hematuria aislada",
        "descripcion": "Presencia de sangre en la orina sin otros síntomas asociados.",
        "sintomas_relacionados": ["Orina con sangre"],
        "posibles_complicaciones": ["Cálculo urinario", "Cáncer vesical incipiente"],
        "recomendaciones": [
          "Solicitar examen de orina",
          "Derivar a urología para estudios complementarios"
        ]
      }
    }
  },
  {
// Regla 5//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Fiebre de origen urinario sospechosa",
        "descripcion": "La fiebre sin otros síntomas puede estar relacionada con un proceso urinario inicial.",
        "sintomas_relacionados": ["Fiebre"],
        "posibles_complicaciones": ["Infección urinaria avanzada"],
        "recomendaciones": [
          "Monitorear temperatura",
          "Realizar análisis de orina y hemograma"
        ]
      }
    }
  },
  {
// Regla 6//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Poliuria funcional",
        "descripcion": "El paciente orina con mayor frecuencia sin síntomas infecciosos ni dolor asociados.",
        "sintomas_relacionados": ["Orina frecuente"],
        "posibles_complicaciones": ["Riesgo de deshidratación", "Infecciones urinarias futuras"],
        "recomendaciones": [
          "Evaluar consumo de líquidos y cafeína",
          "Realizar control metabólico (glucosa, electrolitos)"
        ]
      }
    }
  },
  {
// Regla 7//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Síndrome de dolor vesical",
        "descripcion": "Combinación de dolor lumbar y molestias al orinar sin fiebre ni hematuria.",
        "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar"],
        "posibles_complicaciones": ["Infección urinaria ascendente"],
        "recomendaciones": [
          "Realizar uroanálisis",
          "Considerar derivación a urología"
        ]
      }
    }
  },
  {
// Regla 8//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Litiasis renal no complicada",
        "descripcion": "Dolor lumbar acompañado de sangre en la orina, sin fiebre ni micción frecuente.",
        "sintomas_relacionados": ["Dolor lumbar", "Orina con sangre"],
        "posibles_complicaciones": ["Cólico renal recurrente", "Obstrucción urinaria"],
        "recomendaciones": [
          "Solicitar ecografía renal o urotac",
          "Mantener hidratación abundante"
        ]
      }
    }
  },
   {
// Regla 9//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Cistitis hemorrágica",
        "descripcion": "Dolor al orinar acompañado de hematuria, sin fiebre ni dolor lumbar.",
        "sintomas_relacionados": ["Dolor al orinar", "Orina con sangre"],
        "posibles_complicaciones": ["Infección urinaria ascendente"],
        "recomendaciones": [
          "Solicitar uroanálisis y urocultivo",
          "Administrar antibióticos según resultado"
        ]
      }
    }
  },
  {
// Regla 10//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Infección urinaria baja",
        "descripcion": "Dolor al orinar acompañado de fiebre sin hematuria ni dolor lumbar.",
        "sintomas_relacionados": ["Dolor al orinar", "Fiebre"],
        "posibles_complicaciones": ["Progresión a pielonefritis"],
        "recomendaciones": [
          "Realizar uroanálisis y urocultivo",
          "Indicar tratamiento antibiótico"
        ]
      }
    }
  },
  {
// Regla 11//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Cistitis no complicada",
        "descripcion": "Frecuencia urinaria y dolor al orinar sin fiebre ni hematuria.",
        "sintomas_relacionados": ["Dolor al orinar", "Orina frecuente"],
        "posibles_complicaciones": ["Infección urinaria recurrente"],
        "recomendaciones": [
          "Solicitar uroanálisis",
          "Indicar antibióticos de primera línea"
        ]
      }
    }
  },
  {
// Regla 12//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Síndrome nefrítico agudo",
        "descripcion": "Hematuria con fiebre sin dolor lumbar ni disuria marcada.",
        "sintomas_relacionados": ["Orina con sangre", "Fiebre"],
        "posibles_complicaciones": ["Insuficiencia renal aguda"],
        "recomendaciones": [
          "Solicitar creatinina sérica y uroanálisis",
          "Derivar a nefrología"
        ]
      }
    }
  },
  {
// Regla 13//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Litiasis vesical inicial",
        "descripcion": "Hematuria acompañada de orina frecuente, sin fiebre ni dolor lumbar.",
        "sintomas_relacionados": ["Orina con sangre", "Orina frecuente"],
        "posibles_complicaciones": ["Infecciones urinarias recurrentes"],
        "recomendaciones": [
          "Solicitar ecografía de vías urinarias",
          "Mantener hidratación abundante"
        ]
      }
    }
  },
  {
// Regla 14//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Infección urinaria recurrente",
        "descripcion": "Fiebre con micción frecuente sin dolor lumbar ni hematuria.",
        "sintomas_relacionados": ["Fiebre", "Orina frecuente"],
        "posibles_complicaciones": ["Daño renal progresivo"],
        "recomendaciones": [
          "Solicitar urocultivo",
          "Iniciar antibióticos según sensibilidad"
        ]
      }
    }
  },
  {
// Regla 15//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Lesión renal traumática",
        "descripcion": "Dolor lumbar asociado a hematuria y disuria sin fiebre.",
        "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar", "Orina con sangre"],
        "posibles_complicaciones": ["Insuficiencia renal aguda", "Hemorragia"],
        "recomendaciones": [
          "Realizar ecografía o TAC abdominal",
          "Valorar hospitalización"
        ]
      }
    }
  },
  {
// Regla 16//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": {
      "type": "diagnostico",
      "params": {
        "nombre": "Absceso perirrenal",
        "descripcion": "Dolor lumbar acompañado de fiebre, sin hematuria ni disuria.",
        "sintomas_relacionados": ["Dolor lumbar", "Fiebre"],
        "posibles_complicaciones": ["Sepsis", "Insuficiencia renal"],
        "recomendaciones": [
          "Solicitar TAC abdominal",
          "Derivar a urología de urgencia"
        ]
      }
    }
  },
  {
// Regla 17//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Posible pielonefritis incipiente",
      "descripcion": "Dolor lumbar acompañado de fiebre sin otros síntomas urinarios evidentes. Puede indicar infección renal temprana.",
      "sintomas_relacionados": ["Dolor lumbar", "Fiebre"],
      "posibles_complicaciones": ["Daño renal", "Sepsis"],
      "recomendaciones": ["Realizar examen de orina y ecografía renal", "Atención médica inmediata"]
    }}
  },
  {
// Regla 18//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Infección urinaria alta",
      "descripcion": "Dolor lumbar con fiebre y orina frecuente, lo que sugiere una infección en vías urinarias altas.",
      "sintomas_relacionados": ["Dolor lumbar", "Fiebre", "Orina frecuente"],
      "posibles_complicaciones": ["Insuficiencia renal aguda", "Absceso renal"],
      "recomendaciones": ["Antibióticos de amplio espectro", "Consulta con urgencias"]
    }}
  },
  {
// Regla 19//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Litiasis renal con hematuria",
      "descripcion": "Dolor lumbar acompañado de sangre en la orina. Puede deberse a cálculos renales.",
      "sintomas_relacionados": ["Dolor lumbar", "Orina con sangre"],
      "posibles_complicaciones": ["Obstrucción urinaria", "Infección asociada"],
      "recomendaciones": ["Ecografía o TAC abdominal", "Hidratación abundante", "Consulta a urología"]
    }}
  },
  {
// Regla 20//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Cálculo renal migratorio",
      "descripcion": "Dolor lumbar con hematuria y aumento de frecuencia urinaria, típico de cálculo que desciende por el uréter.",
      "sintomas_relacionados": ["Dolor lumbar", "Orina con sangre", "Orina frecuente"],
      "posibles_complicaciones": ["Cólico renal severo", "Obstrucción vesical"],
      "recomendaciones": ["Analgesia adecuada", "Estudio imagenológico", "Derivación a urología"]
    }}
  },
  {
// Regla 21//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Pielonefritis con hematuria",
      "descripcion": "Dolor lumbar con fiebre y hematuria, característico de una infección renal con daño en las vías urinarias.",
      "sintomas_relacionados": ["Dolor lumbar", "Fiebre", "Orina con sangre"],
      "posibles_complicaciones": ["Sepsis", "Cicatrización renal"],
      "recomendaciones": ["Antibióticos intravenosos", "Hospitalización", "Monitoreo de función renal"]
    }}
  },
  {
// Regla 22//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Pielonefritis complicada",
      "descripcion": "Dolor lumbar con fiebre, hematuria y aumento en la frecuencia urinaria. Cuadro grave que requiere hospitalización.",
      "sintomas_relacionados": ["Dolor lumbar", "Fiebre", "Orina con sangre", "Orina frecuente"],
      "posibles_complicaciones": ["Insuficiencia renal crónica", "Shock séptico"],
      "recomendaciones": ["Atención hospitalaria urgente", "Estudios de laboratorio completos", "Antibióticos IV"]
    }}
  },
  {
// Regla 23//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Cistitis con irradiación lumbar",
      "descripcion": "Dolor al orinar con molestias lumbares, sin fiebre ni hematuria. Puede indicar cistitis complicada.",
      "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar"],
      "posibles_complicaciones": ["Progresión a infección renal", "Molestias crónicas"],
      "recomendaciones": ["Urocultivo", "Antibióticos orales", "Hidratación abundante"]
    }}
  },
  {
// Regla 24//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Infección urinaria complicada",
      "descripcion": "Dolor lumbar, disuria y orina frecuente, típico de una infección que progresa hacia vías urinarias altas.",
      "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar", "Orina frecuente"],
      "posibles_complicaciones": ["Pielonefritis", "Resistencia bacteriana"],
      "recomendaciones": ["Consulta médica inmediata", "Examen de orina completo", "Tratamiento antibiótico"]
    }}
  },
  {
// Regla 25//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Pielonefritis con disuria",
      "descripcion": "Dolor lumbar acompañado de fiebre y dolor al orinar, lo que indica infección renal activa.",
      "sintomas_relacionados": ["Dolor lumbar", "Fiebre", "Dolor al orinar"],
      "posibles_complicaciones": ["Sepsis", "Cicatrización renal"],
      "recomendaciones": ["Hospitalización", "Antibióticos intravenosos", "Control de función renal"]
    }}
  },
  {
// Regla 26//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Infección urinaria severa",
      "descripcion": "Dolor lumbar, fiebre, disuria y polaquiuria, indicativo de un cuadro infeccioso avanzado.",
      "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar", "Fiebre", "Orina frecuente"],
      "posibles_complicaciones": ["Abscesos renales", "Insuficiencia renal"],
      "recomendaciones": ["Consulta de urgencias", "Cultivo de orina y sangre", "Tratamiento antibiótico agresivo"]
    }}
  },
  {
// Regla 27//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Cálculo renal con infección vesical",
      "descripcion": "Dolor lumbar, disuria y hematuria sin fiebre, típico de litiasis con compromiso de la vejiga.",
      "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar", "Orina con sangre"],
      "posibles_complicaciones": ["Obstrucción urinaria", "Infección ascendente"],
      "recomendaciones": ["Estudio de imágenes", "Antibióticos orales", "Evaluación urológica"]
    }}
  },
  {
// Regla 28//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Litiasis con infección urinaria baja",
      "descripcion": "Dolor lumbar, disuria, hematuria y polaquiuria sin fiebre, indicativo de infección vesical asociada a cálculos.",
      "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar", "Orina con sangre", "Orina frecuente"],
      "posibles_complicaciones": ["Progresión a pielonefritis", "Retención urinaria"],
      "recomendaciones": ["Ecografía renal", "Antibióticos", "Control por urología"]
    }}
  },
  {
// Regla 29//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Pielonefritis con hematuria y disuria",
      "descripcion": "Dolor lumbar, fiebre, hematuria y disuria, cuadro infeccioso avanzado con afectación renal.",
      "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar", "Orina con sangre", "Fiebre"],
      "posibles_complicaciones": ["Sepsis", "Cicatrización renal"],
      "recomendaciones": ["Antibióticos intravenosos", "Monitoreo hospitalario", "Control nefrológico"]
    }}
  },
  {
// Regla 30//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Infección urinaria multisintomática grave",
      "descripcion": "Presencia simultánea de todos los síntomas: dolor lumbar, fiebre, disuria, hematuria y polaquiuria. Cuadro crítico.",
      "sintomas_relacionados": ["Dolor lumbar", "Dolor al orinar", "Fiebre", "Orina con sangre", "Orina frecuente"],
      "posibles_complicaciones": ["Shock séptico", "Insuficiencia renal crónica"],
      "recomendaciones": ["Hospitalización inmediata", "Terapia antibiótica IV", "Monitoreo en unidad de cuidados intensivos"]
    }}
  },
  {
// Regla 31//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Cistitis hemorrágica febril",
      "descripcion": "Dolor al orinar con hematuria y fiebre, sin dolor lumbar. Infección vesical complicada.",
      "sintomas_relacionados": ["Dolor al orinar", "Orina con sangre", "Fiebre"],
      "posibles_complicaciones": ["Extensión a riñones", "Sepsis"],
      "recomendaciones": ["Antibióticos", "Reposo relativo", "Monitoreo de evolución"]
    }}
  },
  {
// Regla 32//

    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": {
      "nombre": "Cistitis hemorrágica complicada",
      "descripcion": "Dolor al orinar, hematuria, fiebre y polaquiuria sin dolor lumbar. Indica infección vesical grave.",
      "sintomas_relacionados": ["Dolor al orinar", "Orina con sangre", "Fiebre", "Orina frecuente"],
      "posibles_complicaciones": ["Sepsis", "Insuficiencia renal aguda"],
      "recomendaciones": ["Atención médica urgente", "Antibióticos IV", "Seguimiento hospitalario"]
    }}
  }
  
]