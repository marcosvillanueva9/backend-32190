import express from 'express'
import session from 'express-session'
// nuevo
import redis from 'redis'
const client = redis.createClient({
  url: "redis://localhost:6379?ConnectTimeout=5000&IdleTimeOutSecs=180",
  legacyMode: true
})
import redisStore from 'connect-redis'
const RedisStore = redisStore(session)

await client.connect()

const app = express()

app.use(session({

    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 60
    }),

  secret: "TeGaneAlan!",
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req,res)=>{
  if(!req.session.contador){
    req.session.contador = 1
    req.session.nombre = req.query.nombre || "Anakin"
    res.send("Hello there " + req.session.nombre)
  } else {
    req.session.contador++
    res.send("Hello there " + req.session.nombre + " you have visited the page " + req.session.contador + " times.")
  }
})

// aca crea tu olvidar
app.get("/olvidar", (req, res) => {
    const nombre = req.session.nombre || ""
  req.session.destroy( err => {
    if (err){
      res.json({error: "algo hiciste mal", descripcion: err})
    } else {
      res.json({respuesta: "Hasta luego " + nombre}) 
    }
  })
})


const PORT = 8082

app.listen(PORT, () => {console.log("escuchando en el 8081")})
 