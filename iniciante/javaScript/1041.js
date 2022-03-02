let input = require('fs').readFileSync('stdin', 'utf8');

// 4.5 -2.2

let linhas = input.split(' ');
const x = parseFloat(linhas.shift());
const y = parseFloat(linhas.shift());

if (x === 0 && y === 0) {
    console.log("Origem");
} else if (x === 0) {
    console.log("Eixo Y");
} else if (y === 0) {
    console.log("Eixo X");
} else if (y > 0 && x > 0) {
    console.log("Q1");
} else if (y > 0 && x < 0) {
    console.log("Q2");
} else if (y < 0 && x < 0) {
    console.log("Q3");
} else if (y < 0 && x > 0) {
    console.log("Q4");
}