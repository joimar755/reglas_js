export const rules = [
  {
    "conditions": { "all": [
      { "fact": "dolor_abdominal", "operator": "equal", "value": true },
      { "fact": "nauseas", "operator": "equal", "value": true },
      { "fact": "vomito", "operator": "equal", "value": true },
      { "fact": "diarrea", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Gastroenteritis aguda" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_abdominal", "operator": "equal", "value": true },
      { "fact": "nauseas", "operator": "equal", "value": true },
      { "fact": "vomito", "operator": "equal", "value": false },
      { "fact": "diarrea", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Infección intestinal leve" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_abdominal", "operator": "equal", "value": true },
      { "fact": "nauseas", "operator": "equal", "value": false },
      { "fact": "vomito", "operator": "equal", "value": true },
      { "fact": "diarrea", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Indigestión alimentaria" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_abdominal", "operator": "equal", "value": false },
      { "fact": "nauseas", "operator": "equal", "value": true },
      { "fact": "vomito", "operator": "equal", "value": true },
      { "fact": "diarrea", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Intoxicación alimentaria" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_abdominal", "operator": "equal", "value": true },
      { "fact": "nauseas", "operator": "equal", "value": true },
      { "fact": "vomito", "operator": "equal", "value": false },
      { "fact": "diarrea", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Colitis infecciosa" } }
  },

  // ... aquí continúan hasta completar 32 diagnósticos distintos ...
  
  {
    "conditions": { "all": [
      { "fact": "dolor_abdominal", "operator": "equal", "value": false },
      { "fact": "nauseas", "operator": "equal", "value": false },
      { "fact": "vomito", "operator": "equal", "value": false },
      { "fact": "diarrea", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Sin evidencia de enfermedad digestiva" } }
  }
]
