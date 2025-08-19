const { Engine } = require('json-rules-engine');

const facts = {
    fiebre: true,
    tos: true,
    dolorDeGarganta: true,
    dificultadParaRespirar: true
}

const rules = [
    {
        conditions: {
            all: [
                { fact: 'fiebre', operator: 'equal', value: true },
                { fact: 'tos', operator: 'equal', value: true },
                { fact: 'dificultadParaRespirar', operator: 'equal', value: true },
            ],
        },
        event: {
            type: 'diagnostico',
            params: {
                diagnostico: 'neumonia',
            }
        }
    }
]
const engine = new Engine(rules);

engine
    .run(facts)
    .then(results => {
        results.events.forEach(event => {
            console.log(event.params.diagnostico);
        });
    })
    .catch(err => {
        console.error(err);
    });
