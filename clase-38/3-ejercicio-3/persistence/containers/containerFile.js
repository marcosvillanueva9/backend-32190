import { promises as fs } from 'fs'

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta
    }

    async guardar(obj) {
        try {
            const objs = await this.listarTodas()
            objs.push(obj)
            await fs.writeFile(this.ruta, JSON.stringify(objs))
        } catch (err) {
            throw new Error('Error al guardar el archivo')
        }
    }

    async listarTodas() {
        try {
            const objs = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(objs)
        } catch (err) {
            return []
        }
    }
}

export default ContenedorArchivo