import Koa from 'koa'
import {koaBody} from 'koa-body'
import alumnos from './alumnos.js'

const app = new Koa()

app.use(koaBody())

app.use(alumnos.routes())

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})