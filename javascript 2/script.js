//cadastramento de jogadores

//informar quantos jogadores serão cadastrados

//goleiro,lateral,meia,atacante : previamente preenchido num vetor

//exibir nome e posiçaõ do jogador

//um vetor para os nomes e outro para as posições

function escolhaPosicao(){
    let dominio = ["goleiro", "zagueiro", "meia", "atacante"];
    let posicao = parseInt(prompt("Digite a posição do jogador: \n 1-Goleiro \n 2-Zagueiro \n 3-Meia \n 4-Atacante"));
  
    return dominio[posicao-1]
  }

const qdeJogador = 3

let nomes = []
let posicoes = []

for(let i = 0; i<qdeJogador; i++){
    let nome = prompt("Digite o nome do jogador "  + (i+1) + ":");
    nomes.push(nome)
    
   
    posicoes.push(escolhaPosicao())
  }