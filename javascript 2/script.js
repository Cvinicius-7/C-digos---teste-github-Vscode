//cadastramento de jogadores

//informar quantos jogadores serão cadastrados

//goleiro,lateral,meia,atacante : previamente preenchido num vetor

//exibir nome e posiçaõ do jogador

//um vetor para os nomes e outro para as posições

function escolhaPosicao(){
    let dominio = ["goleiro", "zagueiro", "meia", "atacante"];

    let posicao;

  do{
    posicao = parseInt(prompt("Digite a posição do jogador: \n 1-Goleiro \n 2-Zagueiro \n 3-Meia \n 4-Atacante"));
  }while(posicao < 1 || posicao > dominio.length);

  return dominio[posicao-1];
  }

function impressao(osJogadores){
  for(let i=0; i<osJogadores.length; i++){
    alert("Nome: " + osJogadores[i].nome + " - posição: " + osJogadores[i].posicao);
  }

}

const qdeJogador = 3;

let jogadores = [];

for(let i = 0; i<qdeJogador; i++){

    let nome = prompt("Digite o nome do jogador "  + (i+1) + ":");
    let posicao = escolhaPosicao();
    let camisa = parseInt(prompt("Digite a camisa do jogador "  + nome + ":"));
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento do jogador "  + nome + ":"));
    let salario = parseFloat(prompt("Digite o salário do jogador "  + nome + ":"));

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
impressao(jogadores);