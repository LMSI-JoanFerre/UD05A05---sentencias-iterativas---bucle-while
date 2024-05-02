function tablaDeMultiplicar(){
    let variable1 = 1;
    

    while (variable1 <= 10){
        let variable2 = 1;
        while(variable2 <= 10){
            console.log(variable1 + " x " + variable2 + " = " + variable1 * variable2)
            variable2++;
        }
        variable1++;
    }
}

tablaDeMultiplicar()