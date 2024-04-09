// Class 
// Plantilla - template 

// Capital letter
class Instrumento {

    constructor(tipo, marca, acustico, nombre) { // Cuando haga la instancia
        // default public
        this._tipo = tipo
        this._marca = marca
        this._acustico = acustico // Boolean 
        this._nombre = nombre 
    }

    // getters & setters
    // property 
    get nombre() {
        return this._nombre
    }

    set nombre(param) {
        // this._nombre = param
        if (isNaN(param)) { // String 
            this._nombre = param
        }
    }

    get acustico() {
        return this._acustico
    }

    set acustico(param) {
        if (typeof param == 'boolean') {
            this._acustico = param
        }
    }

    description() {
        
        return `
        nombre : ${this._nombre}
        tipo : ${this._tipo}
        marca : ${this._marca}
        acústico : ${this._acustico}
        `
    }


    precio(param) {
        console.log('El precio de esta guitarra es de: ' +  param)
    }

    afinacio(param) {
        console.log('Esta guitarra esta afinada en : ' + param)
    }

}

const guitarra = new Instrumento('cuerda', 'ibanez', true, 'Guitarra')

console.log(guitarra.nombre)
guitarra.nombre = 'Guitarra 12 cuerdas'
console.log(guitarra.nombre)

guitarra.acustico = false
console.log(guitarra.acustico)

guitarra.acustico = 1234
console.log(guitarra.acustico)

console.log(guitarra)
console.log(guitarra.description())

guitarra.precio(1200)
guitarra.afinacio('E / MI')


