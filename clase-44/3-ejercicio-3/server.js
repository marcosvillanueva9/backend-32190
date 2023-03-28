import express from 'express'
import GraphqlController from './controladores/GraphqlController.js'

const app = express()

app.use(express.static('public'))

app.use('/graphql', new GraphqlController())

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})