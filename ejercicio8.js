function countFromTo(desde, hasta) {
    desde = Number(desde);
    hasta = Number(hasta);

    if (!isNaN(desde) && !isNaN(hasta)) {
        do {
            console.log(desde)
            desde++
        } while (desde <= hasta)
    } else {
        console.log("Error, ambos parámetros deben ser números.");
    }
}

countFromTo(2, 6);
countFromTo("7", 14);
countFromTo('h', 8);
countFromTo(9, 3);
