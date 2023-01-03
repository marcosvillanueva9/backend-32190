import ContenedorMemoria from "../contenedores/ContenedorMemoria.js"
import { generarUsuario } from '../utils/utils.js'

class ApiUsuariosMock extends ContenedorMemoria {
    constructor() {
        super()
    }

    popular(cant) {
        const nuevos = []
        for (let i = 0; i < cant; i++) {
            const usuarioNuevo = generarUsuario()
            const guardado = this.guardar(usuarioNuevo)
            nuevos.push(guardado)
        }
        return nuevos
    }
}

export default ApiUsuariosMock