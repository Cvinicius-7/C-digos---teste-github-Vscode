/*
Crie um algoritmo para calcular a média de duas notas digitadas pelo usuário, sendo que a segunda nota tem peso dois.
*/

let nota1 = parseFloat(prompt("Digite o Valor da primeira nota"));
let nota2 = parseFloat(prompt("Digite o Valor da segunda nota"));

let media = (nota1 + nota2 *2) / 3;

alert("A média das notas é "+ media.toFixed(2));


