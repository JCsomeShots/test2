 // Objetos
        // Propiedades (características) - variables 
        // Métodos (acciones ) - function
        
        // Diferencia con un array
        // key => value (clave => valor)
        // En conra de los arrays que será por el index

        // primitivo o compuesto 

        // acceder a un valor 

        let firstName = 'nombre'
        
        const pedro = {
            nombre : 'Pedro',
            apellido : 'Cruz'
        }
        const maria = {
            nombre : 'Maria',
            apellido : 'Lecina'
        }


        // con el punto = persona.name Estático 
        // persona.nombre
        // persona.apellido
        
        // con los corchetes [] = persona['name'] Dinámico
        // persona[firstName] // output : Pedro 
        // firstName = 'apellido'
        // persona[firstName] // output: Fujimori 
        
        const arrPersonas = [pedro, maria];

        for (let i = 0; i < arrPersonas.length; i++){
            console.log( arrPersonas[i] )
            let personaActual = arrPersonas[i]
            console.log(personaActual.nombre)
        }

        Object.keys(pedro) // output ['nombre', 'apellido']
        Object.values(pedro) // output ['Pedro', 'Cruz']
        pedro.hasOwnProperty('age') // output false
        pedro.hasOwnProperty('nombre') // output true