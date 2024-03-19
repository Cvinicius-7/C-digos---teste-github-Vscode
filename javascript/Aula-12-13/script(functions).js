
function obterSituacao(aMedia) {
  const notaAprovacao = 7;
  let situacao = "Reprovado";

  if (aMedia >= notaAprovacao) {
    situacao = "Aprovado";
  }

  return situacao;
}
let outraMedia = 8;
let minhaSituacao = obterSituacao(outraMedia);
alert("a minha situacao e" + minhaSituacao);