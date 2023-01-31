import express from 'express'
import cluster from 'cluster'
import os from 'os'

const numCPUs = os.cpus().length

if (cluster.isMaster) {
    console.log(numCPUs)
    console.log(`PID number: ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log(`Worker ${worker.process.pid} died: ${new Date().toString()}`)
        cluster.fork()
    })
} else {
    const app = express()

    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/', (req, res) => {
        res.send(`Servidor express en ${PORT} - <b> PID: ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT} - PID: ${process.pid}`);
    })
}