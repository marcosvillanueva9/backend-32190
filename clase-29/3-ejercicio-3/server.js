// modo fork

// pm2 start server.js --name serverModoFork --watch -- 8081

// modo cluster (se agrega el -i)

// pm2 start server.js --name serverModoCluster -i max --watch -- 8082

import express from 'express'

const app = express()

const PORT = parseInt(process.argv[2]) || 8080

app.get('/', (req, res) => {
    res.send(`Servidor express en ${PORT} - <b> PID: ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})