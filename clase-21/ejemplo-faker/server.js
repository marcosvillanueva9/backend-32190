import express from 'express'
import UsuariosRouter from './router/usuarios.js'

const app = express()

app.use(express.json())

app.use('/api/usuarios', new UsuariosRouter())

const PORT = 8080
app.listen(PORT, () => {
    console.log('servidor escuchando')
})