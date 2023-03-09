import express from 'express'
import handlebars from 'express-handlebars'

import * as controllers from './controllers/personas.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('hbs', handlebars.engine({ extname: '.hbs', defaultLayout: 'index.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

//--------------------------------//
//          HTML ON WIRE          //
//--------------------------------//

app.get('/html-onwire', controllers.getHTMLOnWire)
app.post('/html-onwire', controllers.postHTMLOnWire)

//--------------------------------//
//          DATA ON WIRE          //
//--------------------------------//

app.get('/data-onwire', controllers.getDataOnWire)
app.post('/data-onwire', controllers.postDataOnWire)
app.get('/data-json', controllers.getJSON)

//--------------------------------//

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})