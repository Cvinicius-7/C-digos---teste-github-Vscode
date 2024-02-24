/*
Crie um algoritmo que recebe um valor de temperatura em Celsius e o converte para Fahrenheit. 
F = (C * 9/5)+32

*/ 

let celcius = parseFloat(prompt("Digite a temperatura em Celsius"));

let fahrenheit = (celcius * 9/5) + 32;

alert('A temperatura em Fahrenheit é: °F' + fahrenheit.toFixed(1));
console.log('A temperatura em Fahrenheit é: °F' + fahrenheit.toFixed(1));