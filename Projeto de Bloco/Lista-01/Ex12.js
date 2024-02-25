/*Crie um algoritmo que calcule a área de uma esfera, sendo que o comprimento do raio é informado pelo usuário.
 A área da esfera é calculada multiplicando-se 4 vezes pi e o raio ao quadrado.*/
 let raio = parseFloat(prompt("Digite o valor do raio da esfera em CM :"));

let areaE = (raio ** 2) * (4 * 3.14);

alert("A área da esfera é: " + areaE.toFixed(2) + " Centímetros Quadrados");
console.log("A área da esfera é: " + areaE.toFixed(2) + " Centímetros Quadrados");
