import { suma, resta, multiplicacion, division } from 'mvillanueva9-basics'
import db from '../persistence/operations.js'

async function sumar(num1, num2) {
    let result = suma(num1, num2)
    const obj = {
        tipo: 'suma',
        params: [num1, num2],
        resultado: result,
        timestamp: Date.now()
    }

    await db.guardar(obj)

    return result
}

async function restar(num1, num2) {
    let result = resta(num1, num2)
    const obj = {
        tipo: 'resta',
        params: [num1, num2],
        resultado: result,
        timestamp: Date.now()
    }

    await db.guardar(obj)

    return result
}

async function multiplicar(num1, num2) {
    let result = multiplicacion(num1, num2)
    const obj = {
        tipo: 'multiplicacion',
        params: [num1, num2],
        resultado: result,
        timestamp: Date.now()
    }

    await db.guardar(obj)

    return result
}

async function dividir(num1, num2) {
    if (num2 == 0) {
        throw new Error('NO SE PUEDE DIVIDIR POR CERO')
    }

    let result = division(num1, num2)
    const obj = {
        tipo: 'division',
        params: [num1, num2],
        resultado: result,
        timestamp: Date.now()
    }

    await db.guardar(obj)

    return result
}

async function listar() {
    return await db.listarTodas()
}

export default {
    sumar,
    restar,
    multiplicar,
    dividir,
    listar
}