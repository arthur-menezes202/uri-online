let input = require('fs').readFileSync('stdin', 'utf8');

let linhas = input.split('\n');

const distancia = linhas.shift();
const combustivel = parseFloat(linhas.shift());

const media = distancia/combustivel;

console.log(`${media.toFixed(3)} km/l`);