'use strict'

function sumar(numero1, numero2) {
    return numero1 + numero2
}
function restar(numero1, numero2) {
    return numero1 - numero2
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2
}
function dividir(numero1, numero2) {
    return numero1 / numero2
}
function elResto(numero1, numero2) {
    return numero1 % numero2
}

function pedirNumero(){

    // captura de los input , select,  result 
    let numero1 = parseInt( document.getElementById('numero1').value )
    let numero2 = parseInt( document.getElementById('numero2').value )
    let operador = parseInt( document.getElementById('operador').value) // este operador 
    let result = document.getElementById('result')
    let resultado = null
    // console.log(numero1, numero2, operador)

    switch (operador) {
        case 1 :
            resultado = sumar(numero1, numero2)
            break
        case 2 :
            resultado = restar(numero1, numero2)
            break
        case 3 :
            resultado = multiplicar(numero1, numero2)
            break
        case 4 :
            resultado = (numero2 == 0) ? 'No se puede dividir entre cero' : dividir(numero1, numero2) // operador ternario 
            break
        case 5 :
            resultado = elResto(numero1, numero2)
            break
        default :
            console.error('Operador no válido')
            break
    }

    result.innerHTML = `El resultado de la operación es: ${resultado}`

}