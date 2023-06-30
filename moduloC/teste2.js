function dobrarNumero(numero) {
    return numero * 2
}

function mostrarNumero(numero) {
    console.log(numero)
    return numero
}


var arrayDeNumeros = [1, 2, 3, 5, 8, 9, 98]


arrayDeNumeros.map(dobrarNumero).map(mostrarNumero)