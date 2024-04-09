function imprimir() {
    var primo = false;
    var numero = prompt("Escoge un número: ");
    if (numero > 1) {
        primo = esPrimo(numero);
    }
    alert(primo);
}


function esPrimo(numero) { 
    let primo = true;
    let i = 2;
    while (primo && i < numero) {
        if (numero % i == 0) {
            primo = false;
        }
        i++;
    }
    return primo;
}
