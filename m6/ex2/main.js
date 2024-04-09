// Global 
const arrayNombres = []
const result = document.getElementById('result')


function PedirNumero(){ // sin Param sin return
    // captura
    let num1 = parseInt(document.getElementById('num1').value) // 
    
    const imprimir = document.getElementById('imprimir') // DIV imprimir
    imprimir.innerHTML = '' // limpieza

    for (let i = 0; i < num1; i++) { // Create Inputs

        let inputCreate = document.createElement('input')
            inputCreate.type = 'text'
            inputCreate.className = 'nombres'
            inputCreate.placeholder = 'Escriba un nombre'

        let br = document.createElement('br')

        imprimir.appendChild(inputCreate)
        imprimir.appendChild(br)
    }

    imprimir.innerHTML += `<button type:"button" onclick= "capturarInput()"> Click me </button> `

}


function capturarInput(){ // sin Param sin return
    let arrNoms = document.querySelectorAll('.nombres') // Todas las coincidencias y las almacena en un array
    
    for (let i = 0; i < arrNoms.length; i++) {

        let nombre = arrNoms[i].value
        arrNoms[i].value = ''

        if (nombre.charAt(0).toUpperCase() == 'A' ){ // sólo con la letra A 
            arrayNombres.push(nombre)
        }


    }

    imprimir()
}


function imprimir(){ // sin Param sin return

    if (arrayNombres.length > 0) {
        result.innerHTML = `Los nombres más bonitos son: <br>   ${arrayNombres.join('<br>')}`
    } else {
        result.innerHTML = `No has introducido nombres que sean bonitos`
    }
}


// Label for 
// document.createElement
// div.appendChild()
// querySelector
// querySelectorAll
