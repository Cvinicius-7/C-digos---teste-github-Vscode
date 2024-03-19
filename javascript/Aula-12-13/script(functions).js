

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

let media = calcularMedia(notas);
let situacao = obterSituacao(media);

alert(
  nomeAluno + "-" + nomeDisciplina + "-" + media.toFixed(2) + "-" + situacao
);
