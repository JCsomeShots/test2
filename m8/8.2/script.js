// Global
const vols = []

const resultCreate = document.getElementById('resultCreate')

// Create
function createVol() {

    // Captura de valores 
    let numVol = document.getElementById('numVol').value // str
    let distancia = parseFloat(document.getElementById('distancia').value)
    let companyia = document.getElementById('companyia').value // str
    let numPassatgers = parseInt(document.getElementById('numPassatgers').value)
    let motors = parseInt( document.getElementById('motors').value)

    // Instancia 
    const vuelo = new Vol(numVol, distancia, companyia, numPassatgers, motors)

    // Persistencia
    vols.push(vuelo)
    console.log(vols)

    resultCreate.innerHTML = 'Su vuelo ha sido creado ' 
    cleanInputs()
}


// Delete
function donarDeBaixaVol() {

    let numVolDelete = document.getElementById('numVolDelete').value

    // For o while¿?¿ 
    // for : incio fin array 1200
    // while : encuentro 
    // 3 elementos => inicio / condición / cambio 

    let i = 0
    let encontrado = false
    do {
        let vueloActual = vols[i ]
        // console.log( vueloActual ) // output cada vuelo
        // console.log( vols[i] ) // output cada vuelo

        if (numVolDelete === vueloActual.numVol) {
            encontrado = true
            console.log('Encontrado')
        }

        i++

        console.log('No encontrado')

    } while (i < vols.length && !encontrado)

    console.log('Salida')

    cleanInputs()

}

function cleanInputs() {
    const inputs = document.querySelectorAll('input:not([type="button"])')
    inputs.forEach( input => input.value = '')
    document.getElementById('numVol').focus()
}