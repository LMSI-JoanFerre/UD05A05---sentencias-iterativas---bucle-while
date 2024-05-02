function countFromTo(desde, hasta) {
    desde = Number(desde);
    hasta = Number(hasta);

    if (!isNaN(desde) && !isNaN(hasta)) {
        if(desde < hasta){
            while (desde <= hasta) {
                console.log(desde);
                desde++;
            } 
        }else{
            console.log("Error: el valor de 'desde' tiene que ser menor que 'hasta'");
        }
        
    } else {
        console.log("Error, ambos parámetros deben ser números.");
    }
}

countFromTo(1, 5);
countFromTo("1", 3);
countFromTo('a', 2);
countFromTo(6, 10);
