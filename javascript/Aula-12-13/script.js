let nomeAluno = prompt("Digite o nome do aluno:");
let nomeDisciplina = prompt("Digite qual disciplina:");
let qtdProvas = parseInt(prompt("Digite a quantidade de provas:"));

let notas = [];

for (let i = 0; i < qtdProvas; i++) {
  notas.push(parseFloat(prompt("Digite a nota da prova")));
}

let media = 0;
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i];
}

media = soma / notas.length;

const notaAprovacao = 7;
let situacao = "Reprovado";

if (media >= notaAprovacao) {
  situacao = "Aprovado";
}

alert(
  nomeAluno + "-" + nomeDisciplina + "-" + media.toFixed(2) + "-" + situacao
);
