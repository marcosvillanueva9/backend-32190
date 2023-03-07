import ContenedorArchivo from "./containers/containerFile.js";
import ContenedorMemoria from "./containers/containerMemory.js";

const modo = process.env.MODE || 'fs'
let contenedor

switch (modo) {
    case 'fs':
        contenedor = new ContenedorArchivo('./db/db.json')
        break
    default:
        contenedor = new ContenedorMemoria()
        break
}

async function guardar(obj) {
    return await contenedor.guardar(obj)
}

async function listarTodas() {
    return await contenedor.listarTodas()
}

export default {
    guardar,
    listarTodas
}