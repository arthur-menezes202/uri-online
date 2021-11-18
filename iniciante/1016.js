let input = require('fs').readFileSync('stdin', 'utf8');

// 30

let linhas = input.split('\n');

const distancia = linhas.shift();

console.log(`${distancia * 2} minutos`);