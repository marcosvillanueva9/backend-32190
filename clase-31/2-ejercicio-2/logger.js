import log4js from 'log4js'

log4js.configure({
    appenders: {
        consola: { type: 'console' },
        archivoDebug: { type: 'file', filename: 'debug.log' },
        archivoErrores: { type: 'file', filename: 'errores.log' },
        // filtros
        loggerConsola: {
            type: 'logLevelFilter',
            appender: 'consola',
            level: 'info'
        },
        loggerArchivoDebug: {
            type: 'logLevelFilter',
            appender: 'archivoDebug',
            level: 'debug'
        },
        loggerArchivoErrores: {
            type: 'logLevelFilter',
            appender: 'archivoErrores',
            level: 'error'
        }
    },
    categories: {
        default: {
            appenders: ['loggerConsola'],
            level: 'all'
        },
        prod : {
            appenders: ['loggerArchivoDebug', 'loggerArchivoErrores'],
            level: 'all'
        }
    }
})

let logger = log4js.getLogger()
if (process.env.NODE_ENV == 'prod') {
    logger = log4js.getLogger('prod')
}

export default logger