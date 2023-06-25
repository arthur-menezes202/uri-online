var input = require('fs').readFileSync('./dev/stdin', 'utf8');
let linhas = input.split(' ');
let linha2 = input.split('\r\n');

const n1 = parseFloat(linhas.shift());
const n2 = parseFloat(linhas.shift());
const n3 = parseFloat(linhas.shift());
const n4 = parseFloat(linhas.shift());
const exame = parseFloat(linha2[1] || 'NaN');

let peso1 = n1 * 2;
let peso2 = n2 * 3;
let peso3 = n3 * 4;
let peso4 = n4 * 1;

let media = (peso1 + peso2 + peso3 + peso4) / 10;

console.log('Media: '+ media.toFixed(1));

if(exame > 0) {
    console.log(`Aluno em exame.\nNota do exame: ${exame}
    `)
}