import PalabrasDAOFactory from "../model/DAOs/palabrasDAOFactory.js"
import Palabras from "../model/models/palabras.js"

class ServicePalabras {

    constructor() {
        this.palabrasDAO = PalabrasDAOFactory.get()
    }

    obtenerPalabras = async () => {
        let palabras = await this.palabrasDAO.obtenerPalabras()
        return palabras.map(p => p.palabra).join(' ')
    }

    guardarPalabra = async (palabra) => {
        if (!ServicePalabras.validarPalabra(palabra, true)) {
            return new Error('No se envio un modelo Palabra correctamente')
        }
        return await this.palabrasDAO.guardarPalabra(palabra)
    }

    static validarPalabra(palabra, required) {
        try {
            Palabras.validar(palabra, required)
            return true
        } catch(error) {
            throw new Error('la palabra no es valida')
        }
    }
}

export default ServicePalabras