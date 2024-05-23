var a_nomes = [];
function increment_vote(){

}
function adicionar(){
    var nome = document.getElementById("input").value;
    if(!a_nomes.includes(nome)){
        a_nomes.push(nome);
        var item = document.createElement("li");
        item.innerHTML = nome;
        item.onclick = increment_vote;
        document.getElementById("lista").appendChild(item);
    }
}