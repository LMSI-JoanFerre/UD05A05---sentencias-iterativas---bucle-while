function countTo(hasta) {
    if (typeof hasta === 'number') {
        hasta = Number(hasta)

        let numero = 1;

        do {
            console.log(numero)
            numero++
        } while (numero <= hasta)

    } else {
        console.log("Error: el parametro debe de ser un número")
    }
}

countTo(4)
countTo('a')
countTo(8)