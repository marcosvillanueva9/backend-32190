const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const data = {
        nombre: 'Steve',
        apellido: 'Rogers',
        edad: '109',
        email: 'iloveubucky@gmail.com',
        telefono: '01111565656'
    }

    res.render('datos', data)

})

app.listen(8080)