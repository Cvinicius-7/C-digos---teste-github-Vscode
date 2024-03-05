const escolhaNumero = prompt("Escolha par ou ímpar").toLowerCase();

if (escolhaNumero !== "par" && escolhaNumero !== "ímpar") {
    alert("Digite Par ou Ímpar");
} else {
    const numeroSorte = Math.floor(Math.random() * 100) + 1;
    alert("O número sorteado foi: " + numeroSorte);

    const resultado = (numeroSorte % 2 === 0) ? "par" : "ímpar";

    if (escolhaNumero === resultado) {
        alert("Ganhou !");
    } else {
        alert("Perdeu !");
    }

    alert("Usuário: " + escolhaNumero + "\nComputador: " + resultado);
}
