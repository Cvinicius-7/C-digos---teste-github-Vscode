/*Crie um algoritmo que calcule a área de um quadrado, sendo que o comprimento do lado é informado pelo usuário. 
A área do quadrado é calculada elevando-se o lado ao quadrado.
 */

let ladoq = parseFloat(prompt("Informe o comprimento do lado em CM: "));

let areaq = ladoq**2;

alert("A área do quadrado informado é: " + areaq.toFixed(1) + " Centímetros Quadrados" );