function countTo(hasta) {
    hasta = Number(hasta);

    if (!isNaN(hasta)) {
        let numero = 1;
        while (numero <= hasta) {
            console.log(numero);
            numero++;
        }
    } else {
        console.log("Error: El parámetro debe ser un número");
    }
}

countTo(5);
countTo('a');
countTo(10);
countTo("3");
