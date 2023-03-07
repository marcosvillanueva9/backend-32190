import express from 'express'
import logger from './logger.js'

const app = express()

app.get('/sumar', controller.sumar)

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