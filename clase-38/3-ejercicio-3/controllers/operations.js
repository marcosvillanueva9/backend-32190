import service from '../services/operations.js'

const suma = async (req, res) => {
    let {a, b} = req.query
    const result = await service.sumar(Number(a), Number(b))

    res.send(`El resultado es ${result}`)
}

const resta = async (req, res) => {
    let {a, b} = req.query
    const result = await service.restar(Number(a), Number(b))

    res.send(`El resultado es ${result}`)
}

const multiplicacion = async (req, res) => {
    let {a, b} = req.query
    const result = await service.multiplicar(Number(a), Number(b))

    res.send(`El resultado es ${result}`)
}

const division = async (req, res) => {
    let {a, b} = req.query
    const result = await service.dividir(Number(a), Number(b))

    res.send(`El resultado es ${result}`)
}

const listar = async (req, res) => {
    const result = await service.listar()

    res.send(result)
}

export default {
    suma,
    resta,
    multiplicacion,
    division,
    listar
}