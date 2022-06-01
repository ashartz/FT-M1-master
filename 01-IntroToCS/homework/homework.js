'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let result = 0;
  let numero = num.split('').reverse();
for (let i = 0; i < numero.length; i++) {
  result +=  numero[i] * 2 ** i;
  // result +=  numero[i] * Math.pow(2,i);
}
return result;
}
function DecimalABinario(num) {
  // tu codigo aca
var binary = ""
while (num>0){
  binary=num %2 + binary
  num=Math.floor(num/2)
}
return binary
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}