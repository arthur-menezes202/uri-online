let input = require('fs').readFileSync('stdin', 'utf8');

// 3 2

let linhas = input.split(' ');
const codLanche = parseFloat(linhas.shift());
const quanti = parseFloat(linhas.shift());
let price;
switch (codLanche) {
    case 1:
      price = 4.00;
      break;
    case 2:
      price = 4.50;
      break;
    case 3:
      price = 5.00;
      break;
    case 4:
      price = 2.00;
      break;
    case 5:
      price = 1.50;
      break;
    default:
      console.log(`error, codigo do lanche não encontrado`);
}

const total = quanti * price;

console.log(`Total: R$ ${total.toFixed(2)}`)
  