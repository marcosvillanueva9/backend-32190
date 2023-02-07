import pino from 'pino'

function buildDefaultLogger() {
    const defaultLogger = pino()
    defaultLogger.level = 'info'
    return defaultLogger
}

function buildProdLogger() {
    const prodLogger = pino('debug.log')
    prodLogger.level = 'debug'
    return prodLogger
}

let logger = buildDefaultLogger()
if (process.env.NODE_ENV == 'prod') {
    logger = buildProdLogger()
}

export default logger