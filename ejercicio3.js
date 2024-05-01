function countTo(hasta) {
    if (typeof hasta === 'number') {
        hasta = Number(hasta)

        let numero = 1;
        while (numero <= hasta){
            console.log(numero)
            numero++
        }
    }else{
        console.log("Error: El parametro debe ser un número")
    }
}

countTo(5)
countTo('a')
countTo(10)