function dibujar() { // sin params y sin return

    // captura de inputs
    let altura = parseInt(document.getElementById('altura').value)
    let result = document.getElementById('result')
    let ancho = parseInt(altura / 2) + 1
    const asterisco = '*'

    // validation 
    if (altura <= 1) {
        result.innerHTML = ''
        return alert('La altura ha de ser mayor a 1')
    }

    if (isNaN(altura)) return alert('La altura ha de ser un número')

    // acción
    result.innerHTML = ''

    for (let index = 1; index < altura; index++) {
        result.innerHTML += asterisco + '<br>' 
    }

    for (let index = 0; index < ancho ; index++) {
        result.innerHTML += asterisco
    }

}