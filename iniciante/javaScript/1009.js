let input = require('fs').readFileSync('stdin', 'utf8');

// JOAO
// 500.00
// 1230.30

let linhas = input.split('\n');

const name = linhas.shift();
const salarioFixo = parseFloat(linhas.shift());
const vendasDoMes = parseFloat(linhas.shift());

const comicao = vendasDoMes * 0.15;
const result = salarioFixo + comicao;

console.log(`TOTAL = R$ ${result.toFixed(2)}`);
