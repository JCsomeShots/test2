class Vol {

    constructor(numVol, distancia,  companyia, numPassatgers, motors) {
        this._numVol = numVol
        this._distancia = distancia
        this._companyia = companyia
        this._numPassatgers = numPassatgers
        this._motors = motors
        this._cars
    }

    get numVol () {
        return this._numVol
    }
    get distancia () {
        return this._distancia
    }
    get companyia () {
        return this._companyia
    }
    get numPassatgers () {
        return this._numPassatgers
    }
    get motors () {
        return this._motors
    }
    set numVol (param) {
        this._numVol = param
    }
    set distancia (param) {
        this._distancia = param
    }
    set companyia (param) {
        this._companyia = param
    }
    set numPassatgers (param) {
        this._numPassatgers = param
    }
    set motors (param) {
        this._motors = param
    }
    

    calculaPetjadaCarboni() {

    }
}


