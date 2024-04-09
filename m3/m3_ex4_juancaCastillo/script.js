let resultDiv = document.getElementById('result')

let num = parseInt(prompt('Escribe un número'))
let numero = parseInt(         document.getElementById('numero').value          )
let doble = num * 2
let triple = num * 3

resultDiv.innerHTML = `
            El doble del número ${num} es: ${doble} <br>
            El triple del número ${num} es: ${triple}
`


const numeroPi = 3.14
