/* Crie um algoritmo que calcule o volume de uma caixa d’água cilíndrica, sendo que os comprimentos do raio e a altura são informados pelo usuário. 
O volume é calculado multiplicando-se pi, o raio ao quadrado e a altura.*/

let raio = parseFloat(prompt("Digite o raio do cilíndro em CM:"));
let altura = parseFloat(prompt("Digite altura do cilíndro em CM:"));

let vol = (raio**2) * 3.14 * altura;

alert("O Volume do cilíndro é: " + vol.toFixed(2) + "Centímetros Cúbicos");
console.log("O Volume do cilíndro é: " + vol.toFixed(2) + "Centímetros Cúbicos");