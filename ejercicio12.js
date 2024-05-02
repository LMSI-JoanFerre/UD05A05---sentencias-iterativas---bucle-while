function tablaDeMultiplicar() {
    let variable1 = 1;

    do {
        let variable2 = 1;
        do {
            console.log(variable1 + " x " + variable2 + " = " + variable1 * variable2)
            variable2++;
        } while (variable2 <= 10);
        variable1++;
    } while (variable1 <= 10);
}

tablaDeMultiplicar()