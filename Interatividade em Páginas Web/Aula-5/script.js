const list = document.createElement("ul");
document.body.appendChild(list);

function adicionar(item){
const itemLista = document.createElement("li");
itemLista.innerHTML = item;
list.appendChild(itemLista);
}
function riscar(item){
    item.classList.toggle("complete");
}

adicionar("item 1");
adicionar("item 2");
adicionar("item 3");
adicionar("item 4");
