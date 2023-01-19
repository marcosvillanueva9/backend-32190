import express from 'express'
import { engine as exphbs } from 'express-handlebars'
import * as jwt from './jwt.js'
///////////////////////
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const usuarios = []

const app = express()

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }))
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html')
})

app.post('/register', (req, res) => {
    const { nombre } = req.body

    const usuario = usuarios.find(usuario => usuario.nombre == nombre)
    if (usuario) {
        return res.status(400).json({
            error: 'este usuario ya existe'
        })
    }

    const user = req.body
    user.contador = 0

    usuarios.push(user)

    const access_token = jwt.generateAuthToken(nombre)
    res.json({access_token})
})

app.get('/register-error', (req, res) => {
    res.render('register-error')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/login', (req, res) => {

    const { nombre, password } = req.body

    const usuario = usuarios.find(usuario => usuario.nombre == nombre)
    if (!usuario) {
        return res.status(400).json({
            error: 'no existe ese usuario'
        })
    }

    if (password != usuario.password) {
        return res.status(400).json({
            error: 'password incorrecta'
        })
    }

    usuario.contador = 0

    const access_token = jwt.generateAuthToken(nombre)
    res.json({nombre, access_token})
})

app.get('/login-error', (req, res) => {
    res.render('login-error')
})

app.get('/api/datos', jwt.auth, (req, res) => {
    const usuario = usuarios.find(usuario => usuario.nombre == req.user.nombre)
    if (!usuario) {
        return res.status(400).json({
            error: 'usuario no encontrado'
        })
    }

    usuario.contador++

    res.json({
        datos: usuario,
        contador: usuario.contador
    })
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`server escuchando en el puerto ${PORT}`)
})