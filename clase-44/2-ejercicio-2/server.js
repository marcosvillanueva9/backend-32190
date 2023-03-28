import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import crypto from 'crypto'

const schema = buildSchema(`
    type Recordatorio {
        id: ID!,
        titulo: String,
        descripcion: String,
        leido: Boolean,
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
        marcarLeidoRecordatorio(id: ID!): Recordatorio
        deleteRecordatoriosLeidos: [Recordatorio]
    }
`)

class Recordatorio {
    constructor(id, { titulo, descripcion, timestamp }) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.timestamp = timestamp
        this.leido = false
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

function marcarLeidoRecordatorio({id}) {
    const index = recordatorios.findIndex(r => r.id == id)
    const recordatorio = recordatorios.find(r => r.id == id)
    if (!recordatorio) {
        throw new Error('No encontrado')
    }

    recordatorio.leido = true
    recordatorios.splice(index, 1, recordatorio)
    return recordatorio
}

function deleteRecordatoriosLeidos() {
    const deleted = []
    for (let rec of recordatorios) {
        if (rec.leido) {
            let index = recordatorios.findIndex(r => r.id == rec.id)
            deleted.push(recordatorios.splice(index, 1)[0])
        }
    }

    return deleted
}

const app = express()

app.use(express.static('public'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        getRecordatorios,
        createRecordatorio,
        marcarLeidoRecordatorio,
        deleteRecordatoriosLeidos
    },
    graphiql: true
}))

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})