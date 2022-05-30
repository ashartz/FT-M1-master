'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let data = num.split('').reverse();
  var result = 0;
for (let i = 0; i < data.length; i++) {
  result += 2 ** i * data[i];  
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