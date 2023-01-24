import dotenv from 'dotenv'
dotenv.config({
    path: './prod.env'
})

const modo = process.env.MODE ?? 'prod'
const puerto = process.env.PORT ?? 0
const debug = process.env.DEBUG == 'true' ? true : false

console.log({
    modo,
    puerto,
    debug
})