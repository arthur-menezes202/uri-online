let input = require('fs').readFileSync('stdin', 'utf8');

// 12.7 10.4 15.2

let linhas = input.split(' ');
const A = parseFloat(linhas.shift());
const B = parseFloat(linhas.shift());
const C = parseFloat(linhas.shift());

const triangoRetangolo = (A * C) / 2;
console.log(`TRIANGULO: ${ triangoRetangolo.toFixed(3) }`);

const pi = 3.14159
const areaDoCirculo = Math.pow(C, 2) * pi;
console.log(`CIRCULO: ${ areaDoCirculo.toFixed(3) }`);

const areaTrapesio = ((A + B) * C ) / 2;
console.log(`TRAPEZIO: ${ areaTrapesio.toFixed(3) }`);

const areaQuadrado = Math.pow(B, 2);
console.log(`QUADRADO: ${ areaQuadrado.toFixed(3) }`);

const areaRetangolo = A * B;
console.log(`RETANGULO: ${ areaRetangolo.toFixed(3) }`);
