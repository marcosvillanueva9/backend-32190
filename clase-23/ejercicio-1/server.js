import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())

app.use(cookieParser('ArgentinaCampeon'))

app.post('/cookies', (req, res) => {
    let { clave, valor, tiempo, firmada } = req.body

    if (!firmada) {
        firmada = false
    }

    if (!clave || !valor) {
        return res.json({error: 'falta nombre o valor'})
    }

    if (tiempo) {
        res.cookie(clave, valor, { maxAge: parseInt(tiempo) * 1000, signed: firmada })
    } else {
        res.cookie(clave, valor, { signed: firmada })
    }

    res.json({ proceso: 'ok' })
})

app.get('/cookies', (req, res) => {
    res.json({ noFirmadas: req.cookies, firmadas: req.signedCookies })
})

app.delete('/cookies/:clave', (req, res) => {
    const { clave } = req.params

    if (!req.cookies[clave] && !req.signedCookies[clave]) {
        return res.json({ error: 'nombre invalido' })
    }

    res.clearCookie(clave)
    res.json({ proceso: 'ok' })
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('Servidor escuchando en el ', PORT)
})