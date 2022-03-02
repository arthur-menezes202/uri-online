let input = require('fs').readFileSync('stdin', 'utf8');

// 10
// 85

let linhas = input.split('\n');

const tempo = linhas.shift();
const distancia = linhas.shift();

const result = (tempo * distancia) / 12;

console.log(result.toFixed(3));