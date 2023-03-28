import RecordatoriosApi from '../servicios/Recordatorios.js'

import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

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

export default class GraphqlController {
    constructor() {
        const api = new RecordatoriosApi()
        return graphqlHTTP({
            schema: schema,
            rootValue: {
                getRecordatorios: api.getRecordatorios,
                createRecordatorio: api.createRecordatorio,
                marcarLeidoRecordatorio: api.marcarLeidoRecordatorio,
                deleteRecordatoriosLeidos: api.deleteRecordatoriosLeidos
            },
            graphiql: true
        })
    }
}