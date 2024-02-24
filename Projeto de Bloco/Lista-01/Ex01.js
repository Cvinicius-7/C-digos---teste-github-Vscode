/* Crie um algoritmo que receba, como entrada, o valor de três notas de um aluno - com valor entre 0 e 10, e, em seguida, informe a média entre elas. 

Neste momento, não é necessário validar se a nota está dentro do intervalo válido!

*/

let nota1 = parseInt(prompt('Digite a primeira nota entre 0 e 10'));
let nota2 = parseInt(prompt('Digite a segunda nota entre 0 e 10'));
let nota3 = parseInt(prompt('Digite a terceira nota entre 0 e 10'));

let media = (nota1 + nota2 + nota3) / 3;

console.log('A média das notas é: ' + media.toFixed(2));
