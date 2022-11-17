// http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=Medidor

const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/datos', (req, res) => {
    res.render('pages/nivel', req.query)
})

app.listen(8080)