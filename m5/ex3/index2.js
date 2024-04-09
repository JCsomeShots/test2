'use strict'

let numRandom = Math.ceil((Math.random() * 10));

function adivinar() {

    console.log(numRandom)
    let numUsuario = null 

    do {
        numUsuario = parseInt( prompt('Escriba un número') ) // NaN
    } while ( numUsuario != numRandom )

    document.getElementById('result').innerHTML = `“Enhorabona, el número era ${numRandom}”.`

}