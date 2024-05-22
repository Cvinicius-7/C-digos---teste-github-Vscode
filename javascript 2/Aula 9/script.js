//registrar uma venda
function registrarVenda() {
    let produto = "refrigerante";
    let quantidade = 2;
    let preco = 6;
    let data = "2023-06-01";

    if (produto && quantidade && preco && data) {
        alert("Venda registrada !" + produto + ", " + quantidade + "unidades , R$" + preco + "por unidade em, " + data);

    } else {
        alert("problemas na venda!")
    }
}
registrarVenda();