export const rules = [
    {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Infección urinaria severa" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Cistitis aguda" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Cálculos renales" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Pielonefritis" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Infección urinaria leve" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Hematuria por irritación vesical" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Infección renal inicial" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Litiasis urinaria" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Cistitis hemorrágica" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": true },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Glomerulonefritis" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": true },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Microhematuria benigna" } }
  },
  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": true },
      { "fact": "dolor_miccion", "operator": "equal", "value": true },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": true }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Síndrome de vejiga hiperactiva" } }
  },

  {
    "conditions": { "all": [
      { "fact": "dolor_lumbar", "operator": "equal", "value": false },
      { "fact": "dolor_miccion", "operator": "equal", "value": false },
      { "fact": "orina_con_sangre", "operator": "equal", "value": false },
      { "fact": "fiebre", "operator": "equal", "value": false },
      { "fact": "orina_frecuente", "operator": "equal", "value": false }
    ]},
    "event": { "type": "diagnostico", "params": { "mensaje": "Sin evidencia de enfermedad del sistema excretor" } }
  }
]
