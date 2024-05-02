function countTo(hasta) {
    if (!isNaN(Number(hasta))) {
        hasta = Number(hasta);

        let numero = 1;

        do {
            console.log(numero);
            numero++;
        } while (numero <= hasta);

    } else {
        console.log("Error: el parámetro debe ser un número");
    }
}

countTo(4);
countTo('a');
countTo(8);
countTo("12");
