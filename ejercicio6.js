function countFromTo(desde, hasta) {
    desde = Number(desde);
    hasta = Number(hasta);

    if (!isNaN(desde) && !isNaN(hasta)) {
        if (desde < hasta) {
            do {
                console.log(desde);
                desde++;
            } while (desde <= hasta);
        } else {
            console.log("Error: el valor de 'desde' tiene que ser menor que 'hasta'");
        }
    } else {
        console.log("Error: ambos parámetros deben ser números.");
    }
}

countFromTo(3, 9);
countFromTo("2", 8);
countFromTo('d', 5);
countFromTo(8, 3);
