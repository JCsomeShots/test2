let numAleatori = Math.ceil(Math.random() * 10)
let result = document.getElementById('result')

function adivinar() {

    console.log(numAleatori)

    let numAdivinar = null
    do {
        numAdivinar = parseInt(prompt('escriba un número'))
    } while (numAdivinar != numAleatori)

    result.innerHTML = `“Enhorabona, el número era ${numAdivinar}”.`
}
