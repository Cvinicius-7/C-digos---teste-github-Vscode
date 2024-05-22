//registrar uma venda
function validarCamposObrigatorios(produto, quantidade, preco, data){
    if (produto && quantidade && preco && data){
        return true;
    }else{
        return false;
    }

}

function registrarVenda() {
    let produto = "refrigerante";
    let quantidade = 2;
    let preco = 6;
    let data = "2023-06-01";

    let validaCampos = validarCamposObrigatorios(produto, quantidade, preco, data );

        if(validaCampos){
        alert("Venda registrada !" + produto + ", " + quantidade + "unidades , R$" + preco + "por unidade em, " + data);

    } else {
        alert("problemas na venda!")
    }
}
registrarVenda();