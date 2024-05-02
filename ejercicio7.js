function countFromTo(desde, hasta) {
    desde = Number(desde);
    hasta = Number(hasta);

    if (!isNaN(desde) && !isNaN(hasta)) {
        while (desde <= hasta) {
            console.log(desde);
            desde++;
        }
    } else {
        console.log("Error, ambos parámetros deben ser números.");
    }
}

countFromTo(6, 9);
countFromTo("5", 10);
countFromTo('u', 5);
countFromTo(10, 3);
