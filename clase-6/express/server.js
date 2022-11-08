const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hola Matias Maranga')
})

app.get('/inicio', (req, res) => {
    res.send('Hola Andres Gaitan')
})

const server = app.listen(8081, () => {
    console.log('Servidor escuchando en el 8081')
})

server.on('error', error => console.log('hubo un error: ' + error))

//get
//post
//put
//delete
//patch