const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

const mensajes = [
    // { author: 'Dario', text: 'los temas están separados en tres bloques'},
    // { author: 'Ivan', text: 'ivan'},
    // { author: 'Ariel', text: 'Tony, Bruce'},
    // { author: 'Pedro', text: 'Choco'}
]

io.on('connection', socket =>{
    console.log('Un cliente se ha conectado')

    socket.emit('messages', mensajes)

    socket.on('new-message', data => {
        mensajes.push(data)

        io.sockets.emit('messages', mensajes)
    })
})

const PORT = 8080

httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})