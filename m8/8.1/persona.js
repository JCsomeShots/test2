class Persona {

    // private property
    #nombre
    #edad
    #apellido

    constructor (nombre, edad, apellido) { // Cliente
        this.#nombre = nombre 
        this.#edad = edad
        this.#apellido = apellido
        this._hobbies = 'cocinar'
        this._duermoTemprano = true
    }

    get nombre() {
        return this.#nombre
    }

    set nombre (param) {
        this.#nombre = param 
    }

    get hobbies () {
        return this._hobbies
    }


    toString() {
        console.log('Yo duermo temprano = ' + this._duermoTemprano)
    }

    
}

const juanca = new Persona ('juanca', 45, 'Castillo')
juanca.toString()

juanca._duermoTemprano // No buena práctica
let myvar // Declaration
myvar = 5 // inicio