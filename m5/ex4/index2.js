const result = document.getElementById('result')
const arrPalabras = []

console.log(arrPalabras.length) // output : 0

function mostrar() {

    do {
        let text = prompt('Escriba una palabra')
        
        let lenText = text.length 
        let charOne = text.charAt(0)
        let capitalLetter = charOne.toUpperCase()
    
    
        if ((lenText == 9 && capitalLetter == 'H') || (lenText == 5 && capitalLetter == 'P') ) {
            result.innerHTML = 'Las palabras bonitas son : <br>'

            arrPalabras.push(text) 
            console.log(arrPalabras.length) // output : 1

        } else {
            result.innerHTML = 'La palabra NO es bonica'
        }

    } while (arrPalabras.length != 3)

    result.innerHTML += arrPalabras.join('<br>')

}