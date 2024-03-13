let nomeAluno = prompt("Digite o nome do aluno:");
let nomeDisciplina = prompt("Digite qual disciplina:");
let qtdProvas = parseInt(prompt("Digite a quantidade de provas:"));

let notas = [];

for (let i = 0; i < qtdProvas; i++) {

  notas.push(parseFloat(prompt("Digite a nota da prova")));
}

let media = 0;
let soma = 0;

for (let i; i < notas.length; i++) {

  soma = soma + notas[i];

}

media = soma / notas.length;

alert(nomeAluno + "-" + nomeDisciplina + "-" + qtdProvas);
