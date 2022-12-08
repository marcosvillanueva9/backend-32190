const { options } = require('./options/mysqlconn.js')
const knex = require('knex')(options)

const usuarios = [
    {nombre: 'federico', apellido: 'la selva', edad: 32, email: 'tufedefavorito@gmail.com'},
    {nombre: 'ezequiel', apellido: 'ramirez', edad: 42, email: 'ezequielitobokita@gmail.com'},
    {nombre: 'dario', apellido: 'rodriguez', edad: 28, email: 'dariokpo99@gmail.com'},
]

knex('usuario').insert(usuarios)
    .then(() => console.log('se ingresaron correctamente'))
    .catch(err => console.log(err))
    .finally(() => {
        knex.destroy()
    })

