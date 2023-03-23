const swaggerJsdoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Nuestra API en Express con Swagger",
            description: "Un simple CRUD de productos"
        }
    },

    apis: ['./docs/**/*.yaml']
}

const swaggerSpecs = swaggerJsdoc(options)

module.exports = { swaggerSpecs }