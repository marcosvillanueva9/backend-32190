import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import crypto from 'crypto'

const schema = buildSchema(`
    type Recordatorio {
        id: ID!,
        titulo: String,
        descripcion: String,
        timestamp: String
    }
    input RecordatorioInput {
        titulo: String,
        descripcion: String
    }
    type Query {
        getRecordatorios: [Recordatorio]
    }
    type Mutation {
        createRecordatorio(datos: RecordatorioInput): Recordatorio
    }
`)

class Recordatorio {
    constructor(id, { titulo, descripcion, timestamp }) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.timestamp = timestamp
    }
}

const recordatorios = []

function getRecordatorios() {
    return recordatorios
}

function createRecordatorio({datos}) {
    const id = crypto.randomBytes(10).toString('hex')
    const timestamp = new Date().toLocaleString()
    const nuevoRecordatorio = new Recordatorio(id, {timestamp, ...datos})
    recordatorios.push(nuevoRecordatorio)
    return nuevoRecordatorio
}

const app = express()

app.use(express.static('public'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        getRecordatorios,
        createRecordatorio
    },
    graphiql: true
}))

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})