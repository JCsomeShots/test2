function convertir() {
    // captura
    let numero = parseFloat ( document.getElementById('numero').value )
    let conversio =  parseInt(document.getElementById('conversio').value)
    let result = document.getElementById('result')
    let message = ''
    const aPeus = 3.28084

    // operar
    switch (conversio) {
        case 1 :
            message = (numero * aPeus).toFixed(3) + ' peus'
            break
        case 2 :
            message = (numero * 0.3048 ).toFixed(2) + ' metres'
            break
        case 3 :
            message = numero * 1.09361 + ' yardes'
            break
        case 4 :
            message = numero * 0.9144 + ' metres'
            break
        default :
            message = 'No has introducido un número válido'
    }

    // output
    result.innerHTML = `el resultat és: ${message}`
}