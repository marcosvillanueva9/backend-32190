import express from 'express'
import cluster from 'cluster'
import os from 'os'

const app = express()

const MODO = process.argv[2] || 'CLUSTER'

function calcularRandoms(min, max, cant) {
    let randoms = []

    for (let i = 0; i < cant; i++) {
        let random = parseInt(Math.random() * (max - min + 1)) + min
        randoms.push(random)
    }
    return randoms
}

app.get('/ramdom-debug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000)
    console.log(randoms);
    res.json({ randoms }).status(200)
})

app.get('/ramdom-nodebug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000)
    res.json({ randoms }).status(200)
})

const PORT = 8080

if (MODO == 'CLUSTER' && cluster.isMaster) {
    const numCPUs = os.cpus().length

    console.log("entramos");

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        cluster.fork()
    })

} else {
    app.listen(PORT, () => {
        console.log("escuchando en el 8080");
    })
}