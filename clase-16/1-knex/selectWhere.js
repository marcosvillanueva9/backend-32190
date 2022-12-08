const { options } = require('./options/mysqlconn.js')
const knex = require('knex')(options)

knex.from('usuario').select("nombre", "edad").where('id', '>', '3')
    .then(rows => {
        for (row of rows) {
            console.log(`${row["nombre"]} tiene ${row["edad"]} vueltas al sol`)
        }
    })
    .catch(err => console.log(err))
    .finally(() => {
        knex.destroy()
    })