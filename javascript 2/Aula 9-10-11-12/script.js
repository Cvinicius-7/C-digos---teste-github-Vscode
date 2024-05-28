const estoque ={
    "Churrasco": {
        
        "quantia": 0,
        "preco": 30.00
    },
    "Bauru": {
        "quantia": 20,
        "preco": 12.00
    },
    "Empada": {
        "quantia": 15,
        "preco": 10.00
    }
};

function validarCamposObrigatorios(produto, quantidade, preco, data) {
    return produto && quantidade !== '' && preco !== '' && data;
}

function validarQuantidadeProdutos(quantidade) {
    return quantidade > 0;
}

function validarPrecoUnitario(preco) {
    return preco > 0;
}
function validarEstoque(produto, quantidade) {
    if(estoque[produto] != null){
        if(estoque[produto].quantia >= quantidade){
            return true;
        }
        
    }else{
        return false;
    }
    
}
function atualizarEstoque(produto,quantidade){
    
    estoque[produto].quantia = estoque[produto].quantia - quantidade;

}
function obterDataTransacao() {
    return new Date().toLocaleString();
}

function gerarNumeroTransacao() {
    return Math.floor(Math.random() * 100000);
}

function registrarVenda(produto, quantidade, preco) {
    let data = obterDataTransacao();
    let numeroTransacao = gerarNumeroTransacao();

    let validaCampos = validarCamposObrigatorios(produto, quantidade, preco, data);
    let validaProdutos = validarQuantidadeProdutos(quantidade);
    let validaPreco = validarPrecoUnitario(preco);
    let validaEstoque = validarEstoque(produto, quantidade);

    if (validaCampos) {
        if (validaProdutos) {
            if (validaPreco) {
                if(validaEstoque){
                    atualizarEstoque(produto,quantidade);
                    return "(" + numeroTransacao + ") Venda registrada ! : " + produto + ", " + quantidade + " unidades, R$" + preco + " por unidade em, " + data;
                }else{
                    return "Problema na quantidade de itens no estoque"
                }
            } else {
                return "Preço unitário inválido!";
            }
        } else {
            return "Problema na validação da quantidade de produtos!";
        }
    } else {
        return "Problemas na venda!";
    }
}
function vender() {
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    let mensagem = registrarVenda(produto, quantidade, preco);

    registrarHistorico(mensagem);
}

function registrarHistorico(mensagem) {

    const historicoVendas = document.getElementById("historicoVendas");
    const li = document.createElement("li");
    li.textContent = mensagem;
    historicoVendas.appendChild(li);
}