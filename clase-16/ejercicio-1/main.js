import { options } from "./options/mysqlconn.js"
import ClienteSQL from "./sqlContainer.js"

const sql = new ClienteSQL(options)

sql.crearTabla()
    .then(() => {
        console.log("1- tabla creada")

        const articulos = [
            { nombre: 'leche', codigo: 'AB-12', precio: 50.56, stock: 30},
            { nombre: 'harina de arroz', codigo: 'CD-23', precio: 100.30, stock: 30},
            { nombre: 'ddl', codigo: 'GH-11', precio: 150, stock: 30},
            { nombre: 'fideos', codigo: 'RG-73', precio: 90.99, stock: 30},
            { nombre: 'crema', codigo: 'JF-99', precio: 45, stock: 30},
        ]

        return sql.insertarArticulos(articulos)
    })
    .then(() => {
        console.log('2- articulos insertados')

        return sql.listarArticulos()
    })
    .then((articulos) => {
        console.log(articulos)
        
        console.log('3- articulos listados')

        return sql.borrarArticulos(3)
    })
    .then(() => {
        console.log('4- articulo 3 borrado')

        return sql.actualizarStock(0, 2)
    })
    .then(() => {
        console.log('5- stock actualizado')

        return sql.listarArticulos()
    })
    .then((articulos) => {
        console.log(articulos)

        console.log('resultado final')
    })
    .catch(err => console.log(err))
    .finally(() => {
        sql.close()
    })