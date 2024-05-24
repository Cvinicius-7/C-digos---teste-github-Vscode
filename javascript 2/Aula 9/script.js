
function validarCamposObrigatorios(produto, quantidade, preco, data) {

    //return (produto && quantidade && preco && data) ? true: false;

    return produto && quantidade != null && preco != null && data;

}
function validarQuantidadeProdutos(quantidade) {
    return quantidade > 0;

}
function validarPrecoUnitario(preco) {
    return preco > 0;
}
function obterDataTransacao() {
    return new Date().toLocaleString();
}
function gerarNumeroTransacao(){
    return Math.floor(Math.random() * 100000);
}
function registrarVenda(produto, quantidade, preco) {
    let produto;
    let quantidade;
    let preco;
    let data = obterDataTransacao();
    let numeroTransacao = gerarNumeroTransacao();

    let validaCampos = validarCamposObrigatorios(produto, quantidade, preco, data);
    let validaProdutos = validarQuantidadeProdutos(quantidade);
    let validaPreco = validarPrecoUnitario(preco);

    if (validaCampos) {
        if (validaProdutos) {
            if (validaPreco) {
                alert("("+ numeroTransacao+") Venda registrada !" + produto + ", " + quantidade + "unidades , R$" + preco + "por unidade em, " + data);
            } else {
                alert("Preco unitario invalido !")
            }
        } else {
            alert("Problema na validacao da quantidade de produtos !");
        }
    } else {
        alert("problemas na venda!");
    }
}
function vender(){

    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;


    registrarVenda(produto,quantidade,preco);
}
