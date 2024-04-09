// functions construct
// template 
// capital letter
function Animal(raza, color, genero, tipo) {
    // property
    this.genero = genero;
    this.raza = raza;
    this.color = color; 
    this.tipo = tipo;

    // // acciones
    // this.correr = function() {
    //     console.log('salgo corriendo muy rápido')
    // }
} 

Animal.prototype.correr = function() {
        console.log('salgo corriendo muy rápido')
    }


// Instancia 
// Crear un nuevo objeto
// const perro  = new Animal('pitbull', 'marrón', 'macho', 'perro')

// console.log(perro) // output todo el objeto "perro"

// // console.log(perro.correr ) // output 
// // console.log(perro.correr()) // output 
// // perro.correr // incorrect
// perro.correr()

// const leon = new Animal('delZoo', 'marrón', 'hembra', 'león')
// console.log(leon )
// leon.correr()
// const perico = new Animal('delZoo', 'marrón', 'hembra', 'perico')
// console.log( perico )
// perico.correr()

















// Clases 
    // template
        // constructor
        // getters & setters
        // method
    // capital letter
    
class Person {

    constructor(nombre, apellido, edad) {
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }

    // getters
    get nombre() {
        return this._nombre
    }
    get apellido() {
        return this._apellido
    }
    get edad() {
        return this._edad
    }

    // setters
    set nombre(x) {
        this._nombre = x
    }
    
    set apellido(x) {
        let password = prompt('password')

        if (password == 1234) {
            this._apellido = x
        }
    }

    set edad(x) {

        if ( !isNaN(x)) {
            this._edad = x
        }
    }

    // método
    saludar() {
        console.log(`Hola, me llamo ${this._nombre} ${this._apellido} y tengo ${this._edad} años`)
    }
}


const guillem = new Person( 'Guillem', 'Babot', 29)
console.log(guillem )
guillem.saludar()

console.log(guillem.edad)

const manel = new Person( 'Manel', 'Cerezo', 44 )
console.log(manel)
manel.saludar()

// FATAL
// manel.nombre = 'Juanca'
// console.log(manel.nombre)






