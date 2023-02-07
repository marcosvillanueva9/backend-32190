import express from 'express'
import logger from './logger.js'

const app = express()

app.get('/sumar', (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)

    if (isNaN(n1) || isNaN(n2)) {
        logger.error('Parametros invalidos')
        return res.send('Parametros invalidos')
    }

    logger.info(`Parametros correctos: ${n1}, ${n2}`)
    res.send(`El resultado de ${n1} + ${n2} = ${n1+n2}`)
})

app.get('*', (req, res) => {
    const { url, method } = req

    logger.warn(`Ruta ${method} ${url} no esta implementada`)
    res.send(`Ruta ${method} ${url} no esta implementada`)
})

const PORT = 8080

const server = app.listen(PORT, err => {
    if (err) {
        logger.error(`Error iniciando el server: ${err}`)
        return
    }

    logger.info(`Servidor escuchando en el puerto: ${PORT}`)
})

server.on('error', err => {
    logger.error(`Error en el servidor: ${err}`)
})