function preguntar(frase) {
    const signosdepreg = "??????"
    return function () {
        console.log(`${frase}${signosdepreg}`)
    }
}

const frasepregunta = preguntar("ola k ase")

frasepregunta()
