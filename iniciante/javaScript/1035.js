let input = require('fs').readFileSync('stdin', 'utf8');

// 2 3 2 6

let linhas = input.split(' ');
const A = parseFloat(linhas.shift());
const B = parseFloat(linhas.shift());
const C = parseFloat(linhas.shift());
const D = parseFloat(linhas.shift());

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A %2 === 0) {
    console.log('Valores aceitos');
}
else {
    console.log('Valores nao aceitos');
}