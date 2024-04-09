

//crud : 

//create
//read
//update
//delete


//array 
// position => value

const tasks = ['hacer la compra', 'llamar a la mama', 'lavar la ropa', 'cocinar']
/** READ */
// let  indexTask = prompt('Escriba el número de la tarea') // 3

// for (let i = 0; i < tasks.length; i++) {

//     console.log(i + 1) // index
//     console.log(tasks[i]) // task 
//     console.log('<br>')
// }


// console.log(tasks [1])

// console.log( tasks[indexTask - 1] )


/**
 *  CREATE
 */
// const tasks2 = []
// tasks2.push('Maths') // Al final
// tasks2.unshift('hacer la compra') // Al inicio
// tasks2.reverse()

// console.log(tasks2.reverse())



/**
 * DELETE
 */

// tasks.pop() // el último
// tasks.shift() // el primero
// tasks.splice(0, 1) // hacer la compra FUERA

// let indexEliminar = prompt('Escriba un index a eliminar') // 2 para el user
// indexEliminar--
// tasks.splice(indexEliminar, 1)
// console.log(tasks)

for (let i = 0; i < tasks.length; i++) {

    console.log(i + 1) // index
    console.log(tasks[i]) // task 
    console.log('***')
}

//Update ... ? 

let indexUpdate = parseInt(prompt('index') )// number
let message = prompt('corections') // string

tasks.splice(indexUpdate -1, 1, message )

for (let i = 0; i < tasks.length; i++) {

    console.log(i + 1) // index
    console.log(tasks[i]) // task 
    console.log('***')
}

// create
// read 
// delete
// exit = ''



