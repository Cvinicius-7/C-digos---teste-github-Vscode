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
document.getElementById("table_peroson").innerHTML = conteudo_tabela