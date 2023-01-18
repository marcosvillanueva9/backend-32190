import express from 'express'
import { engine as exphbs } from 'express-handlebars'
import session from 'express-session'
//----------------------------------------------------//
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
//----------------------------------------------------//

const usuarios = []

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//----------------------------------------------------//
passport.use('register', new LocalStrategy({
    passReqToCallback: true    
}, (req, username, password, done) => {
    const { direccion } = req.body

    const usuario = usuarios.find(usuario => usuario.username == username)
    if (usuario) {
        return done('el usuario ya esta registrado')
    }

    const newUser = {
        username,
        password,
        direccion
    }
    usuarios.push(newUser)

    done(null, newUser)
}))

passport.use('login', new LocalStrategy((username, password, done) => {

    const usuario = usuarios.find(usuario => usuario.username == username)
    if (!usuario) {
        return done('no hay usuario', false)
    }

    if (usuario.password != password) {
        return done('pass incorrecta', false)
    }

    usuario.contador = 0

    return done(null, usuario)
}))

passport.serializeUser((user, done) => {
    done(null, user.username)
})

passport.deserializeUser((username, done) => {
    const usuario = usuarios.find(usuario => usuario.username == username)
    done(null, usuario)
})

//----------------------------------------------------//

const app = express()

app.use(session({
    secret: 'esteesmisecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

//----------------------------------------------------//
app.use(passport.initialize())
app.use(passport.session())
//----------------------------------------------------//

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }))
app.set('view engine', '.hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//-------------------//
// Rutas de registro //
//-------------------//

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.post('/register', passport.authenticate('register', { failureRedirect: '/failregister', successRedirect: '/'}))

app.get('/failregister', (req, res)=> {
    res.render('register-error')
})

//----------------//
// Rutas de login //
//----------------//

app.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    }

    res.sendFile(__dirname  + '/views/login.html')
})

app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin', successRedirect: '/datos' }))

app.get('/faillogin', (req, res) => {
    res.render('login-error')
})

//----------------//
// Rutas de datos //
//----------------//

function requireAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/login')
    }
}

app.get('/datos', requireAuthentication, (req, res) => {
    if (!req.user.contador) {
        req.user.contador = 0
    }

    req.user.contador++

    const usuario = usuarios.find(usuario => usuario.username == req.user.username)

    res.render('datos', {
        datos: usuario,
        contador: req.user.contador
    })
})

//----------------//
// Ruta de logout //
//----------------//

app.get('/logout', (req, res) => {
    req.logout(err => {
        res.redirect('/login')
    })
})

//-----------//
// Ruta raiz //
//-----------//

app.get('/', (req, res) => {
    res.redirect('/datos')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`server escuchando en el puerto ${PORT}`)
})