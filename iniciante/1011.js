let input = require('fs').readFileSync('stdin', 'utf8');

// 3

let linhas = input.split('\n');
const raio = parseFloat(linhas.shift());
const pi = 3.14159;
const result = (4.0/3.0) * pi * (raio * raio * raio);

console.log(`VOLUME = ${result.toFixed(3)}`);