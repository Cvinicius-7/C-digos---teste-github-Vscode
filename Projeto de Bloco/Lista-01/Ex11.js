/*Crie um algoritmo que calcule a área de um círculo, sendo que o comprimento do raio é informado pelo usuário.
 A área do círculo é calculada multiplicando-se pi e o raio ao quadrado.*/

let raio = parseFloat(prompt("Digite o valor do raio do círculo em CM :"));

let area = (raio ** 2) * 3.14;

alert("A área do círculo é: " + area.toFixed(2) + " Centímetros Quadrados");
console.log("A área do círculo é: " + area.toFixed(2) + " Centímetros Quadrados");