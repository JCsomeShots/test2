const result = document.getElementById('result')
const char = ' *'

function triangulo(num) {

    result.innerHTML = ''

    for (let index = 0; index < num - 1; index++) { // vertical
        
        for (let j = 0; j <= index; j++) { // Horizontal
            result.innerHTML += char
        }
        result.innerHTML += '<br>'
    }

    
    for (let index = num; index >= 0; index--) { // vertical
        
        for (let j = 0; j < index; j++) { // Horizontal
            result.innerHTML += char
        }
        result.innerHTML += '<br>'
    }

}


function mostrar() {

    let num = parseInt( document.getElementById('num').value)
    triangulo(num) 

    // for ( let i = 0; i <= num; i++) {
    //     result.innerHTML += ` ${ triangulo(num) }`
    //     result.innerHTML += '<br>'
    // }
    


}