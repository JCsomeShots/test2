'use strict'

// function declarada

// sin params sin return 
function sacarPorConsola() { // :void
    let message = 'Esto es una función declarada'
    console.log(message)
}

// con params y sin return
function imprimirPerConsola(num = 0, str = 'anonimous', bool = true ) { // : void
    console.log(num)
    console.log(str)
    console.log(bool)
}

// sin params y con return
function sinParamsConReturn() { // :number
    return 4 * 6
}

// con params y con return
function conParamsConReturn(str1, str2, str3) {

    let nombre = 'Miguel '
    let edad = '18'

    return str1 + str2 + str3 + '. Mi nombre es: ' + nombre + 'y tengo ' + edad + ' años'
}


// section 4
sacarPorConsola()
imprimirPerConsola(5, undefined, true)

let newVar = sinParamsConReturn()
console.log(newVar)
console.log(sinParamsConReturn) // no ERROR but ... 
console.log( sinParamsConReturn() )

let message = conParamsConReturn('hola, ', 'buenos ', 'días')
console.log(message)
console.log(conParamsConReturn('hola, ', 'buenos ', 'tardes'))



