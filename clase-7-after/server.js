const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

class Contenedor {
    constructor() {
        this.db = ['marcos', 'silvia', 'martin']
    }

    async getAllPersonas() {
        return this.db
    }

    async addPersona(persona) {
        this.db.push(persona)
        return 'ok'
    }

    async editPersona(id, persona) {
        
    }
}

const contenedor = new Contenedor()

app.get('/api/personas', (req, res) => {
    contenedor.getAllPersonas()
    .then(r => {
        res.send(r)
    })
})

app.post('/api/personas', async (req, res) => {
    const { newPersona } = req.body

   const result = await contenedor.addPersona(newPersona)

   res.status(201).send(result)
})

app.listen(8080, () => {
    console.log('servidor escuchando correctamente')
})