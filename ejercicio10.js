function tablaDeMultiplicar(numero) {
    if (!isNaN(Number(numero))) {
        let variable = 1;
        do {
            console.log(numero + " x " + variable + " = " + numero * variable)
            variable++;
        } while (variable <= 10)
    } else {
        console.log("Error: el parametro debe de ser un número")
    }
}

tablaDeMultiplicar(5)
tablaDeMultiplicar(2)
tablaDeMultiplicar('a')
tablaDeMultiplicar("4")