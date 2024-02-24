/*
    Um motorista deseja abastecer um valor X em reais, de combustível. Escreva um algoritmo para ler o preço do litro do combustível e o valor que o motorista deseja abastecer. Em seguida, informe quantos litros foram abastecidos
*/ 
let valLitro = parseFloat(prompt("Digite o valor do litro do combustível em reais"));
let valAbastecer = parseFloat(prompt("Digite o valor em reais que deseja abastecer"));

let litros = valAbastecer / valLitro;

alert("Foram abestecidos " + litros.toFixed(2) + " litros de combustível");
console.log("Foram abestecidos " + litros.toFixed(2) + " litros de combustível");