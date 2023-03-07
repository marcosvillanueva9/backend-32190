import express from 'express'
import router from './routes/operations.js'
import routerAuth from './routes/register.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Pong')
})

app.use('/operaciones', router)
app.use('/', routerAuth)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
