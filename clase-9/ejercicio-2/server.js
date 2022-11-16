const express = require('express')
const { promises: fs } = require('fs')

const app = express()

app.engine('bokita', async (filePath, options, callback) => {
    try {
        const template = await fs.readFile(filePath)
        const html = template.toString()
                        .replace('^^titulo$$', options.titulo)
                        .replace('^^mensaje$$', options.mensaje)
                        .replace('^^autor$$', options.autor)
                        .replace('^^version$$', options.version)
                        .replace('^^nombre$$', options.nombre)
                        .replace('^^apellido$$', options.apellido)
                        .replace('^^fyh$$', options.fyh)
        
        return callback(null, html)
    } catch (err) {
        return callback(err)
    }
})

app.set('views', './views')
app.set('view engine', 'bokita')

app.get('/cte1/:autor', (req, res) => {

    const obj = {
        titulo: 'vamos',
        mensaje: 'bokita',
        autor: req.params.autor,
        version: '123'
    }

    res.render('plantilla1', obj)
})

app.get('/cte2', (req, res) => {

    const obj = {
        nombre: 'marcelo',
        apellido: 'gallardo',
        fyh: new Date().toLocaleString()
    }

    res.render('plantilla2', obj)
})

const server = app.listen(8080, () => {
    console.log("servidor escuchando en el 8080")
})