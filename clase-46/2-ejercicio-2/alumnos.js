import Router from 'koa-router'

const router = new Router({
    prefix: '/alumnos'
})

const alumnos = [
    { dni: 33456789, nombre: 'Juan Perez', materia: 'Física', nota: 6 },
    { dni: 35457683, nombre: 'Celia Gómez', materia: 'Matemáticas', nota: 7 },
    { dni: 38683112, nombre: 'Cintia Fernández', materia: 'Física', nota: 4 },
    { dni: 34567209, nombre: 'Diego Mei', materia: 'Matemáticas', nota: 8 },
]

router.get('/', ctx => {
    ctx.body = { alumnos }
})

router.get('/:dni', ctx => {
    const alumno = alumnos.find(a => a.dni == ctx.params.dni)
    if (!alumno) {
        ctx.response.status = 404
        ctx.body = {
            status: 'error',
            message: 'alumnos not found'
        }
        return
    }

    ctx.body = alumno
})

router.post('/', ctx => {
    if (
        !ctx.request.body.dni ||
        !ctx.request.body.nombre ||
        !ctx.request.body.materia ||
        !ctx.request.body.nota
    ) {
        ctx.response.status = 400
        ctx.body = {
            status: 'error',
            message: 'plese enter the data correctly'
        }
        return
    }

    const newAlumno = {
        dni: ctx.request.body.dni,
        nombre: ctx.request.body.nombre,
        materia: ctx.request.body.materia,
        nota: ctx.request.body.nota
    }

    alumnos.push(newAlumno)
    
    ctx.response.status = 201
    ctx.body = {
        status: 'success',
        message: 'New alumno added successfully'
    }
})

router.put('/:dni', ctx => {
    if (
        !ctx.request.body.dni ||
        !ctx.request.body.nombre ||
        !ctx.request.body.materia ||
        !ctx.request.body.nota
    ) {
        ctx.response.status = 400
        ctx.body = {
            status: 'error',
            message: 'plese enter the data correctly'
        }
        return
    }

    const dni = ctx.params.dni
    const index = alumnos.findIndex(a => a.dni == dni)
    alumnos.splice(index, 1, ctx.request.body)

    ctx.response.status = 200
    ctx.body = {
        status: 'success',
        message: 'New alumno updated successfully'
    }
})

router.delete('/:dni', ctx => {
    const dni = ctx.params.dni
    const index = alumnos.findIndex(a => a.dni == dni)
    alumnos.splice(index, 1)

    ctx.response.status = 200
    ctx.body = {
        status: 'success',
        message: 'New alumno deleted successfully'
    }
})

router.get('/promedio', ctx => {
    const materia = ctx.request.query.materia

    let suma = 0
    const cant = alumnos
        .filter(a => a.materia == materia)
        .map(a => (suma += a.nota)).length

    if (cant == 0) {
        ctx.body = {
            promedio: 'No hay alumnos en esa materia'
        }
        return
    }
    const promedio = suma / cant

    ctx.body = {
        promedio: promedio
    }
})

export default router