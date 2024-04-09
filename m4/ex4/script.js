function mostrar() {

    let result = document.getElementById('result')
    let text = document.getElementById('word').value
    
    let lenText = text.length 
    let charOne = text.charAt(0)
    let capitalLetter = charOne.toUpperCase()

    // Error
    if (lenText == 0 || lenText == 1 || !isNaN(text)) {
        console.error('No has ingresado una palabra')
        result.innerHTML = '<small style="color:red;"> No has ingresado una palabra </small>'
        return
    }

    //            case 1                                   case 2
    if ((lenText == 9 && capitalLetter == 'H') || (lenText == 5 && capitalLetter == 'P') ) {
        result.innerHTML = 'La palabra es bonica'
    } else {
        result.innerHTML = 'La palabra NO es bonica'
    }
}


// Operador ternario 
// tag script ? head : body 
// length 
// métodos del string : charAt() , toUpperCase(), toLowerCase(), indexOf()
// Div id
// Error case
// return 

