/* Crie um algoritmo que calcule a área de um retângulo, sendo que os comprimentos da altura e da base são informados pelo usuário.
 A área do retângulo é calculada multiplicando-se a altura pela base.*/

 let altura = parseFloat(prompt("Digite a altura do triangulo em CM:"));
 let base = parseFloat(prompt("Digite a altura do triangulo em CM:"));

 let area = altura * base;

 alert("A área do triângulo é: " + area.toFixed(1) + " Centimetros Quadrados");