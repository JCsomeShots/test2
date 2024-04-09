
// // functions Declarada 

// cumplirAnyos(4)

// function cumplirAnyos(fecha) { // :void
//     console.log(`Felicidades por tu cumpleaños en la fecha ${fecha}`)
//     return 
// }

// cumplirAnyos(23)




// // functions expresadas

// // miAniversario() // Reference Error 

// let miAniversario = function () {
//     console.log('Felicitats')
// }

// miAniversario()

// // myArrow() // Reference Error 

// // arrow functions 
// // () => {}
// let myArrow = () => { console.log('Soy una function flecha')  } // SIN SIN 
// myArrow()

// let myArrow2 = () => console.log('Soy una function flecha sin llaves ') 
// myArrow2()

// let myArrow3 = (a, b) => console.log( a + b) // Con param 
// myArrow3(12, 45)

// let myArrow4 = (a, b) =>  a + b  // CON param  CON return 
// console.log(myArrow4(2, 6) )

// let myArrow5 =  x => x + 100 
// console.log( myArrow5(300) )


// // function myFunc () {
// //     let validate = () => {}
// //     let equals = () => {}
// //     equals()
// //     validate()
// // }

// let myArrow6 = () => {
//     console.log('Hola')
//     console.log('Adeu')
//     return 42
// }

// let num = 1.025
// console.log(  parseFloat(num.toFixed(3))  +  23)


// console.log( 100 +  myArrow6()  )




// Function Declaradas
// podemos llamarla en cualquier parte del code
// myfunc()
function myfunc(){
    console.log(this)
}
myfunc()

let donde = function () {
    console.log(this)
}

donde()

// // Function expresada
// // función anónima
// // después de inicializar

// // myfunc2() // Incorrect
// let myfunc2 = function () {
//     console.log('Adeu classe')
// }
// myfunc2()

// // arrow function
// // () => {}
// // no llaves = sólo una línea 
// // return implicito  = sólo una línea
// // no paréntesis = con tiene sólo un parámetro 
// const myFunc3 = () => { console.log('Soy una arrow function ')}




// Objeto literal
// relación key => value
const fiat = {
    modelo : 'panda', // propiedades
    color : 'blanco',
    cilindrada : 1100,
    ruedas4 : true,
    // métodos
    acelerar  : function() {
        console.log ('De 0 a 100 en 10 segundos')
    },
    frenar : function () {
        console.log ('Frena en 50m')
    }, 
    description : function() {
        return " Soy el mejor coche del mercado y soy de color: " + this.cilindrada
    },
    dondeEstoy : function() {
        console.log(this)
    }
    // , 
    // dondeEstoy2 : () => { 
    //     console.log(this) // warning, ojito 
    // }
}


// const ford = {
//     modelo: '',
//     color: '',
// }

// const seat = {
//     modelo: '', 
// }






console.log(fiat)
console.log(fiat.color)

// console.log(acelerar)

fiat.acelerar()
console.log( fiat.description() )

fiat.dondeEstoy()
// fiat.dondeEstoy2()


let str = new String('Hola')
let str2 = 'hola'

console.log(str)
console.log(str2)

// función constructura
function Coche(color, cilindrada, motor, marca) {
    this.color = color
    this.cilindrada = cilindrada
    this.motor = motor
    this.marca = marca
}

// instancia 
const fiat2 = new Coche('verde', 3400, '200cc', 'fiat')
const mercedes = new Coche('azul', 800, '500cc', 'mercedes')

console.log(fiat2)
console.log(fiat2.color )

fiat2.color = 'Cian'
console.log(fiat2.color )
fiat2.color = 'magenta'
fiat2.color = 'yellow'

// console.log(mercedes)

















