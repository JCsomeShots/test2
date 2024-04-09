// const juanca = new Client (1234, 45,  'perú', 6)
// console.log(juanca)

// console.log(juanca.petjadaCarboni(), 'Toneladas')
// console.log(juanca.toString())

const result = document.getElementById('result')
const clients = [] // DDBB persistencia => plural 

function eraseInput() { // ux - ui
    document.getElementById('dni').value = ''
    document.getElementById('edad').value = ''
    document.getElementById('nacionalitat').value = ''
    document.getElementById('vuelos').value = ''

    // document.getElementById('dni').focus = true

}



function createClient() {

    // Captura de elementos
    let dni = document.getElementById('dni').value
    let edad = parseInt(document.getElementById('edad').value)
    let nacionalitat = document.getElementById('nacionalitat').value
    let vuelos = parseInt(document.getElementById('vuelos').value)


    // Validate


    // ejemplo de estático 

    // console.log ( Client.toString() ) => mal ejemplo
    // console.log(  Client.soyUnMethod() ) // Error
    console.log( Client.description() )




    // Crear una instancia
    const client = new Client (dni, edad, nacionalitat, vuelos)
    console.log(client.soyUnMethod())

    client.dni = 999999 // setter
    console.log(client.dni) // getter

    console.log(client.petjadaCarboni())
    console.log(client.toString())

    // Instancia actual 
    result.innerHTML = ''
    result.innerHTML = `<pre> ${client.toString()}   </pre>`
    // result.innerHTML += client.petjadaCarboni() + ' Toneladas <br>'

    // Array 
    clients.push(client)

    // result.innerHTML += 'DNI: ' + client.dni + '<br>'
    //      inicio    ;    condición          ; cambio
    for (let index = 0; index < clients.length; index++) {
        result.innerHTML += ` Cliente : ${index + 1} /  ${clients[index]} <br>`
    }

    // Erase
    eraseInput()
    
}



