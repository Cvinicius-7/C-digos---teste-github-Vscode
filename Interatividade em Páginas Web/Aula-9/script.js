var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

var nomes_categorias = ['frutas', 'paises', 'animais'];
var categorias_palavras =[ ['Abacaxi', 'Morango', 'Uva', 'Banana', 'Melancia'],
                          ['Brasil', 'Argentina', 'Chile'],
                           [ 'Cachorro', 'Gato', 'Papagaio', 'Cavalo', 'Galinha']];
var botoes = function () {
  mBotoes = document.getElementById('botoes');
  letras = document.createElement('ul');
  for (var i = 0; i < alfabeto.length; i++) {
    letras.id = 'alfabeto';
    list = document.createElement('li');
    list.id = 'letra';
    list.innerHTML = alfabeto[i];
    mBotoes.appendChild(letras);
    letras.appendChild(list);
  }
}
  botoes();