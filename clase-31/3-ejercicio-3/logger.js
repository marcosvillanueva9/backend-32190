import winston from 'winston'

function buildDefaultLogger() {
    return winston.createLogger({
        transports: [new winston.transports.Console( { level: 'info' })]
    })
}

function buildProdLogger() {
    return winston.createLogger({
        transports: [
            new winston.transports.File( { filename: 'debug.log', level: 'debug' }),
            new winston.transports.File( { filename: 'error.log', level: 'error' })
        ]
    })
}

let logger = buildDefaultLogger()
if (process.env.NODE_ENV == 'prod') {
    logger = buildProdLogger()
}

export default logger