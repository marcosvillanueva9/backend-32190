import express from 'express'
import { getTime } from './lib/utils'
import Persona from './Persona'

const p: Persona = new Persona("Coder", "Federico")

const app = express()

app.get("/", (req, res) => {
    res.send({
        time: getTime(),
        name: p.getFullName(),
    })
})

const PORT = 8080

app.listen(PORT, () => {
    console.log("conectado")
})