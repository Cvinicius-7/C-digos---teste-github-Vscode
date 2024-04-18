function Person(first,last,id){
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.fullName = function(){
        return this.firstName + " " +this.lastName;
    };
}
let personArray = [new Person("John","Doe",1),new Person("Jane","Doe",2),new Person("jack","Doe",3),new Person("lewis","Doe",4),new Person("alexia","Doe",5)]

let conteudo_tabela = "<tr><th>Primeiro Nome</th><th>Ultimo Nome</th><th>Identificador</th><th>Nome Completo</th></tr>"
for (let i in personArray) {
    conteudo_tabela += "<tr><td>" + personArray[i].firstName + "</td><td>" + personArray[i].lastName + "</td><td>" + personArray[i].id + "</td><td>" + personArray[i].fullName() + "</td></tr>"
  }
document.getElementById("table_person").innerHTML = conteudo_tabela;
