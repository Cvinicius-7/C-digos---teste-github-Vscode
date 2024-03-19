
function obterSituacao(aMedia) {
  const notaAprovacao = 7;
  if (aMedia >= notaAprovacao) {
    return "Aprovado";
  }

  return "reprovado";
}
let situacao = obterSituacao(media);

alert(
    nomeAluno + "-" + nomeDisciplina + "-" + media.toFixed(2) + "-" + situacao
  );
   