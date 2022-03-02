let input = require('fs').readFileSync('stdin', 'utf8');

// 10.0
const N = parseFloat(input);

if (N > 0.0 && N <= 25.0){
  console.log('Intervalo [0,25]');
}
else if (N > 25.0 && N <= 50.0){
  console.log('Intervalo (25,50]\n');
}
else if (N > 50.0 && N <= 75.0){
  console.log('Intervalo (50,75]\n');
}
else if (N > 75.0 && N <= 100.0){
  console.log('Intervalo (75,100]\n');
}
else{
  console.log(`Fora de intervalo\n`);
}