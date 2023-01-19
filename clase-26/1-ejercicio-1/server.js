import express from 'express'
import { engine as exphbs } from 'express-handlebars'
import session from 'express-session'
////////////////////////
import passport from 'passport'
import { Strategy as TwitterStrategy } from 'passport-twitter'
///////////////////////
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const API_KEY = "UCPmt45xszZRV56Tq6rkLHyb7"
const API_SECRET = "PSDuMHSvzIz1BXnYTxgzvPW4uFxkg7In1zPhOgxMORB9URdcsH"

passport.use(new TwitterStrategy({
    consumerKey: API_KEY,
    consumerSecret: API_SECRET,
    callbackURL: '/auth/twitter/callback'
}, (token, tokenSecret, userProfile, done) => {
    console.log(userProfile);
    done(null, userProfile)
}))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

//------------------------------

const app = express()

app.use(session({
    secret: 'secretshhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }))
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    } else {
        res.redirect('/login')
    }
})

app.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/datos')
    }

    res.sendFile(__dirname + '/public/login.html')
})

app.get('/faillogin', (req, res) => {
    res.render('login-error')
})

app.get('/auth/twitter', passport.authenticate('twitter'))

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/faillogin'
}))

app.get('/datos', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/')
    }

    if (!req.user.contador) {
        req.user.contador = 0
    }

    req.user.contador++

    res.render('datos', {
        nombre: req.user.displayName,
        username: req.user.username,
        foto: req.user.photos[0].value,
        contador: req.user.contador
    })
})

app.get('/logout', (req, res) => {
    req.logout(err => {
        res.redirect('/')
    })
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`server escuchando en el puerto ${PORT}`)
})