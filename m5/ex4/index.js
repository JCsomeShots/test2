'use strict'
const result = document.getElementById('result')
const arrPalabras = []

function mostrar() {

    do {
        let text = prompt ('Escriba una palabra')
        
        let lenText = text.length 
        let charOne = text.charAt(0)
        let capitalLetter = charOne.toUpperCase()
        
        
        if ((lenText == 9 && capitalLetter == 'H') || (lenText == 5 && capitalLetter == 'P') ) {
            result.innerHTML = 'Las palabras bonitas son:  <br>'
            arrPalabras.push(text)
        } else {
            result.innerHTML = 'La palabra NO es bonica'
        }


    } while (arrPalabras.length != 3)

    result.innerHTML += arrPalabras
}