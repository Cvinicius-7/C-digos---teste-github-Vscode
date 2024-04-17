
//ex1
const pessoa={
    nome: "João",
    sobrnome: "Silva",
    mostrarNome: function(){
        console.log(this.nome + " " + this.sobrnome);
    
    }
};
//ex2
const pessoa2= new Object();
pessoa2.nome="Maria";
pessoa2.sobrenome="Silva";

//ex3
function pessoa(primNome, sbrNome) {
    this.nome = primNome;
    this.sobrenome = sbrNome;
  }
const pessoa3= new pessoa("felipe", "cunha");
