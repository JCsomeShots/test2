// 1 Import 

// 2 Declaración variables 
const arr = ['hello', 'world']

// 3 function 

// function con param sin return
function myfuncConParam(num, segunValue, x, nombre = null){ //  : void
    num++
    console.log(num, segunValue, num + segunValue, x, nombre)
}

// // function sin param sin return
function myfunc(){
    let num1 = 8
    let num2 = 6
    console.log(num1, num2)
}

// // function sin param con return
function sumar(){
    let suma = 45 + 57
    return suma
}
// // function sin param con return
function nombres (){
    return 'JuanCa'
}
// // function sin param con return
function restar(){
    let resta = 3654 - 24
    return resta
}

// // function sin param con return
function multiplicar(){
    return 12 * 5 // Devuelvo y operando 
}


// function con param con return
function dividir( x , y ){
    return x / y 
    let divisio = x / y 
    return divisio 
    let message = 'lo q quieran '
}


function imprimir (){
    console.log('hola')

    let resultadoDeLaSuma = sumar()
    console.log(resultadoDeLaSuma)

    let nombre = nombres()
    console.log(nombre)

    let resta = restar()
    console.log(resta)
    console.log( restar() )


    console.log( restar() + sumar() - multiplicar()  )


    let multi = multiplicar()
    console.log(multi)

    let divide = dividir(12, 4)
    console.log(divide)
    console.log(dividir(12, 4))

}



function validar(num){
    return num > 80 // condición
}

function validar2(num) {
    return isNaN(num)
}

function operar() {
    let num = 89
    num++
    console.log(num)

    let validation = validar(num)
    console.log(validation)

    let validation2 = validar2('Soy un string')
    console.log(validation2)
}


// 4 operación 
operar()

console.log(validar(78))
console.log(validar(80))
console.log(validar(124))
console.log(validar('345'))

// myfuncConParam(78, '34', arr)
// myfunc()
// imprimir()
















