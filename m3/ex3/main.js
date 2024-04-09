let resultDiv = document.getElementById('result')

// media de 3 notas 
// pedir 3 notas
// sumar 3 notas
// dividirlo entre número de notas

const numNotas = 3
let num1 = parseInt(prompt('Escriba un número') )// almacena
let num2 = parseInt(prompt('Escriba un número') ) // almacena
let num3 = parseInt(prompt('Escriba un número') )// almacena

let suma = num1 + num2 + num3

let media = suma / numNotas


resultDiv.innerHTML = '<br>'
resultDiv.innerHTML += media.toFixed(2)

// console.log(typeof (media))

