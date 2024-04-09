class Client {

    // Private // Declarando la propiedad
    #dni 
    #edad

    // let newVar => Error
    constructor (dni, edad, nacionalitat, vols) {
        this.#dni = dni
        this.#edad = edad
        this._nacionalitat = nacionalitat
        this._vols = vols

        /**** */
        // this._tons = 0.5
        this._nombre = null
        this._apellido = ''
    }

    get dni() {
        return this.#dni
    }
    get edad() {
        return this.#edad
    }
    get nacionalitat() {
        return this._nacionalitat
    }
    get vols() {
        return this._vols
    }

    set edad(param) {
        this.#edad = param
    }
    set nacionalitat(param) {
        this._nacionalitat = param
    }
    set vols(param) {
        this._vols = param
    }


    petjadaCarboni() {
        return parseFloat(this._vols * Client.toneladas())    
    }

    static description() {
        return `  Hola seré un método estático `
    }

    static toneladas() {
        return 0.5
    }

    soyUnMethod() {
        return `No soy estático `
    }

    
    toString() {
        return `
            dni: ${this.#dni}
            edad: ${this.#edad}
            nacionalidad : ${this._nacionalitat}
            vols: ${this._vols}
            petjada de Corboni : ${this.petjadaCarboni()}
        `
    }
}