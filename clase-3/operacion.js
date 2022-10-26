const operacion = (num1, num2, operac) => {
    return operac(num1, num2)
}

const suma = (num1, num2) => {
    return num1 + num2
}

const resta = (num1, num2) => {
    return num1 - num2
}

const multiplicacion = (num1, num2) => {
    return num1 * num2
}

const division = (num1, num2) => {
    return num1 / num2
}

////////



console.log(operacion(2,3,suma))
console.log(operacion(2,3,resta))
console.log(operacion(2,3,multiplicacion))
console.log(Math.floor(operacion(2,3,division)))