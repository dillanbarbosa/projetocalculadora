function soma(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt( document.getElementById('segundo_numero').value);

    let soma_numero = numero_um + numero_dois;

    document.getElementById('resultado').textContent = 'Rusultado: ' + soma_numero;

    let subtrai_numero = numero_um - numero_dois;

    document.getElementById('resultado2').textContent = 'Rusultado: ' + subtrai_numero;



}