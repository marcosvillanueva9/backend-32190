const operaciones = []

async function guardar(obj) {
    operaciones.push(obj)
}

async function listarTodas() {
    return operaciones
}

export default {
    guardar,
    listarTodas
}