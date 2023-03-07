class ContenedorMemoria {

    constructor() {
        this.operaciones = []
    }

    async guardar(obj) {
        this.operaciones.push(obj)
    }

    async listarTodas() {
        return this.operaciones
    }
}

export default ContenedorMemoria