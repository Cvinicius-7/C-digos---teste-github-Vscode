let letra = prompt("Informe uma Letra:").toLowerCase();

if (letra.length == 1) {
  if (letra >= "a" && letra <= "z") {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      alert("É uma vogal");
    } else {
      alert("É uma consoante ");
    }
  } else {
    alert("Não é uma letra");
  }
} else {
  alert("Digite uma única letra do alfabeto, por favor!");
}
