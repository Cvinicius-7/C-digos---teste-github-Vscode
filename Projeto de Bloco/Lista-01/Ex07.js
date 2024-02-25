/*Crie um algoritmo que calcule a gorjeta a ser paga de uma conta de restaurante. 
A gorjeta é calculada como sendo 10% do valor da conta, que deve ser informado pelo usuário.*/

let valConta = parseFloat(prompt("digite o valor da conta"));

let gorjeta= valConta* 10/100;
let contaFinal = valConta +gorjeta;

alert("o valor da gorjeta será de: " + gorjeta.toFixed(2) +" Reais o valor final da conta será de: " + contaFinal.toFixed(2) + " Reais");
console.log("o valor da gorjeta será de: " + gorjeta.toFixed(2) +" Reais o valor final da conta será de: " + contaFinal.toFixed(2) + " Reais");

