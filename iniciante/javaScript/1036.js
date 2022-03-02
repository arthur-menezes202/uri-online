let input = require('fs').readFileSync('stdin', 'utf8');

// 10.0 20.1 5.1

let linhas = input.split(' ');
const A = parseFloat(linhas.shift());
const B = parseFloat(linhas.shift());
const C = parseFloat(linhas.shift());

const delta = Math.pow(B, 2) - 4 * A * C;

if (A < 1 || B < 1 || C < 1 || delta < 0 ) {
    console.log('Impossivel calcular');
}
else {
const negativeB = B * -1;
const rais = Math.sqrt(delta);

const R1 = (negativeB + rais) / (2 * A);
const R2 = (negativeB - rais) / (2 * A); 
console.log(`R1 = ${R1.toFixed(5)}`);
console.log(`R2 = ${R2.toFixed(5)}`);
}