let nomeAluno = prompt("Digite o nome do aluno:");
let nomeDisciplina = prompt("Digite qual disciplina:");
let qtdProvas = parseInt(prompt("Digite a quantidade de provas:"));



function receberNotas(aQDProvas){
    let notas = [];

for (let i = 0; i < aQDProvas; i++) {
  let nota = parseFloat(prompt("Digite a nota da prova"));

  notas.push(nota);
}
}

function calcularMedia(asNotas) {
  let media = 0;
  let soma = 0;

  for (let i = 0; i < asNotas.length; i++) {
    soma = soma + asNotas[i];
  }

  media = soma / asNotas.length;

  return media;
}

function obterSituacao(aMedia) {
  const notaAprovacao = 7;
  if (aMedia >= notaAprovacao) {
    return "Aprovado";
  }

  return "reprovado";
}
let notas = receberNotas(qteProva);
let media = calcularMedia(notas);
let situacao = obterSituacao(media);

alert(
  nomeAluno + "-" + nomeDisciplina + "-" + media.toFixed(2) + "-" + situacao
);
