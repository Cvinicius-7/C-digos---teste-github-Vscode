var a_nomes = [];
function increment_vote(){

}
function adicionar(){
    var nome = document.getElementById("input").value;
    if(!a_nomes.includes(nome)){
        a_nomes.push(nome);
        var item = document.createElement("li");
        item.innerHTML = nome + " <span>0</span>";
        item.setAttribute("onclick", "increment_vote(this)");
        document.getElementById("lista").appendChild(item);
    }
}