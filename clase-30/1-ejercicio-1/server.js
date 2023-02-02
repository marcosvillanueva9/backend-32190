// modo fork

// pm2 start server.js --name serverModoFork --watch -- 8081

// modo cluster (se agrega el -i)

// pm2 start server.js --name serverModoCluster -i max --watch -- 8082

import express from 'express'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

//app.use(express.static('public'))

const PORT = parseInt(process.argv[2]) || 8080

app.get('/datos', (req, res) => {
    res.send(`Servidor express en ${PORT} - <b> PID: ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})