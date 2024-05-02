function tablaDeMultiplicar(numero) {
    if (!isNaN(Number(numero))) {
        numero = Number(numero);
        let variable = 1;
        while (variable <= 10) {
            console.log(numero + ' x ' + variable + ' = ' + numero * variable);
            variable++;
        }
    } else {
        console.log("Error: debes introducir un número")
    }
}

tablaDeMultiplicar(2);
tablaDeMultiplicar(5);
