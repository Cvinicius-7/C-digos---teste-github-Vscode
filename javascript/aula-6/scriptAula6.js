function definir(){

    let valorSigno = Number(document.getElementById('signo').value);

    let valorTime = Number(document.getElementById('time').value);
    
    let qteSoftskill = Number(document.querySelectorAll('input[id="softskill"]:checked').length);

    let valorSoftskill = qteSoftskill*10;

    let resultado = valorSigno + valorTime + valorSoftskill;

    document.getElementById("resultado")
}