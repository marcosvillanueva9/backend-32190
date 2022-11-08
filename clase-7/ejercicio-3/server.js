const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const palabras = ["Frase", "inicial"]

// verbos

app.get('/api/frase', (req, res) => {
    res.json({ frase: palabras.join(' ') })
})

app.get('/api/palabras/:num', (req, res) => {
    const { num } = req.params
    res.json({ buscada: palabras[parseInt(num) - 1] })
})

app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body
    palabras.push(palabra)

    res.json({ agregada: palabra, posicion: palabras.length })
})

app.put('/api/palabras/:num', (req, res) => {
    const { num } = req.params
    const { palabra } = req.body
    
    const palabraAnterior = palabras[parseInt(num) -1]
    palabras[parseInt(num) -1] = palabra

    res.json({ actualizada: palabra, anterior: palabraAnterior})
})

app.delete('/api/palabras/:num', (req, res) => {
    const { num } = req.params
    const palabraEliminada = palabras.splice(parseInt(num) - 1, 1)

    res.json({ borrada: palabraEliminada })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('escuchando en el puerto ' + PORT)
})