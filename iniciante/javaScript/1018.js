let input = require('fs').readFileSync('stdin', 'utf8');

// 556

let linhas = input.split('\n');

const tempo = linhas.shift();

let horas = 0;
let minutos = 0;
let segundos = 0;

for (let index = 0;index < tempo; index++) {
    segundos += 1;
    if (segundos === 60) {
        minutos += 1;
        segundos = 0;
    }
    if (minutos === 60) {
        horas += 1;
        minutos = 0;
    }
}

console.log(`${horas}:${minutos}:${segundos}`);