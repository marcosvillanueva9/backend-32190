function dividir(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 == 0) {
            reject("no se puede dividir por 0!!!!! >:(")
        } else {
            resolve(num1 / num2)
        }
    })
}

dividir(4,2)
    .then(result => {
        return result
    })
    .then((resultado => {
        console.log(resultado*2)
    }))
    .catch(err => {
        console.log(err)
    })