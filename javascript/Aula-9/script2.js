const idadeMin = 12;
const alturaMin = 1.3;

let idade =  parseInt(prompt("Informe a idade:"));
let altura = parseFloat(prompt("Informe a altura:"));

//condição 1
if (idade >= idadeMin && altura >= alturaMin) {
  alert("A criança esta liberada para o brinquedo");
} else {
  alert("A criança não esta liberada para o brinquedo");
}
