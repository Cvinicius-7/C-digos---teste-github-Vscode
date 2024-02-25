/*Crie um algoritmo que calcule o novo valor de um salário a partir de um valor percentual de reajuste. 
O valor atual do salário e o valor percentual do reajuste devem ser informados pelo usuário como, 
por exemplo, 7,3%.
 */

let salario = parseFloat(prompt("Informe o valor do salário:"));
let percent = parseFloat(prompt("Informe o percentual do aumento:"));

let reajuste = salario * (percent/100);
let salFinal = salario + reajuste;

alert("O valor do salário reajustado é " + salFinal + " Reais");
console.log("O valor do salário reajustado é " + salFinal + " Reais");
