let input = require('fs').readFileSync('stdin', 'utf8');

// 1.0 7.0
// 5.0 9.0

let linhas = input.split('\n');

let linha1 = linhas.shift().split(' ');
let linha2 = linhas.shift().split(' ');

const x1 = linha1.shift();
const y1 = linha1.shift();
const x2 = linha2.shift();
const y2 = linha2.shift();

let  result = (Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2));
result < 0 ? result*=-1 : result*=1;

const distancia = Math.sqrt(result)
console.log(distancia.toFixed(4));