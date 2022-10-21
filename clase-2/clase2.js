function trampa(valor) {
    let potencia = valor * valor
    return function() {
        console.log(potencia)
    }
}

console.log(trampa(10))

let variable = trampa(10)

variable()