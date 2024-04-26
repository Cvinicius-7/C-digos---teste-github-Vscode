
function escolhaPosicao() {
  let dominio = ["goleiro", "zagueiro", "meia", "atacante"];

  let posicao;

  do {
    posicao = parseInt(prompt("Digite a posição do jogador: \n 1-Goleiro \n 2-Zagueiro \n 3-Meia \n 4-Atacante"));
  } while (posicao < 1 || posicao > dominio.length);

  return dominio[posicao - 1];
}
function impressao(osJogadores) {
  osJogadores.forEach((func, index) => {

    let idade = calcularIdade(func.anoNascimento);
    let salarioLiquido = calculoSalarial(func.salario, func.anoNascimento, func.posicao,func.camisa);

    alert((index + 1) + "Nome: " + func.nome + " - Idade: " + idade +" - Posição: " + func.posicao +" - Camisa: "+ func.camisa +" - Salário: " + func.salario + " - Salário Líquido: " + salarioLiquido);
  });
}
function calcularBonusPorIdade(aIdade) {

  if (aIdade <= 20) {
    return 1;
  } else if (aIdade > 40) {
    return 0, 5;
  } else {
    return 2;
  }

}
function calcularBonusPorPosicao(aPosicao) {

  switch (aPosicao) {
    case "goleiro":
      return 0.20;

    case "Zagueiro":
    case "lateral":
      return 0.15;

    case "meia":
    case "atacante":
      return 0.30;

    default:
      return 0;
  }

}
function calcularIdade(oAno) {

  const anoAtual = new Date().getFullYear();

  return anoAtual - oAno;
}
function calculoSalarial(oSalario, oAnoNascimento, aPosicao) {

  let valorBonusPorPosicao = oSalario * calcularBonusPorPosicao(aPosicao);

  let idade = calcularIdade(oAnoNascimento);
  let valorBonusPorIdade = oSalario * calcularBonusPorIdade(idade);


  return oSalario + valorBonusPorIdade + valorBonusPorPosicao
}
function obterJogadores(){
  let jogadores = [];

  for (let i = 0; i < qdeJogador; i++) {

    let nome = prompt("Digite o nome do jogador " + (i + 1) + ":");
    let posicao = escolhaPosicao();
    let camisa = parseInt(prompt("Digite a camisa do jogador " + nome + ":"));
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento do jogador " + nome + ":"));
    let salario = parseFloat(prompt("Digite o salário do jogador " + nome + ":"));
  
    jogadores.push(
      {
        nome: nome,
        posicao: posicao,
        camisa: camisa,
        anoNascimento: anoNascimento,
        salario: salario
      }
    );
  }
  return jogadores
}

const qdeJogador = parseInt(prompt("Digite a quantidade de jogadores"));

let osJogadores = obterJogadores();


impressao(osJogadores);