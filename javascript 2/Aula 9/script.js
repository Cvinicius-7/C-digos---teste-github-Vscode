
function validarCamposObrigatorios(produto, quantidade, preco, data) {

    //return (produto && quantidade && preco && data) ? true: false;

    return produto && quantidade !=null && preco !=null && data;

}
function validarQuantidadeProdutos(quantidade) {
    return quantidade > 0;

}
function validarPrecoUnitario(preco){
    return preco > 0;
}

function registrarVenda() {
    let produto = "refrigerante";
    let quantidade = 2;
    let preco = 6;
    let data = "2023-06-01";

    let validaCampos = validarCamposObrigatorios(produto, quantidade, preco, data);
    let validaProdutos = validarQuantidadeProdutos(quantidade);
    let validaPreco = validarPrecoUnitario(preco);

    if (validaCampos) {
        if (validaProdutos){
            if(validaPreco){
            alert("Venda registrada !" + produto + ", " + quantidade + "unidades , R$" + preco + "por unidade em, " + data);
        }else{
            alert("Preco unitario invalido !")
        }
        } else {
            alert("Problema na validacao da quantidade de produtos !");
        }
    } else {
        alert("problemas na venda!");
    }
}
registrarVenda();