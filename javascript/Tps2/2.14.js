function jogoPedraPapelTesoura() {
  
    function escolhaComputador(){
      const opcoes = ["pedra", "papel", "tesoura"];
      const indice = Math.floor(Math.random() * 3);
      return opcoes[indice];
    }
      
    function vencedor(escolhaJogador, escolhaComp){
      if (escolhaJogador === escolhaComp) {
        return "Empate";
      } else if (
        (escolhaJogador === "pedra" && escolhaComp === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComp === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComp === "papel")
      ) {
        return "Você ganhou!";
      } else {
        return "Você perdeu!";
      }
    }
    
    const escolhaJogador = prompt("Escolha entre: pedra, papel ou tesoura").toLowerCase();
    
    const escolhaComp = escolhaComputador();
    
    alert("O computador jogou : " + escolhaComp);
    
    const resultado = vencedor(escolhaJogador, escolhaComp);
    alert(resultado);
      
    }
     jogoPedraPapelTesoura()