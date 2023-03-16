import PalabrasBaseDAO from "./palabrasDAO.js";
import palabraDTO from "../DTOs/palabras.js";

class PalabrasDAOMem extends PalabrasBaseDAO {

    constructor() {
        super()
        this.palabras = []
    }

    obtenerPalabras = async () => {
        return this.palabras
    }

    guardarPalabra = async (palabra) => {
    try {
            let id = this.getNextId(this.palabras)
            let timestamp = Date.now()
            let palabraGuardada = palabraDTO(palabra, id, timestamp)
            this.palabras.push(palabraGuardada)
            return palabraGuardada
        } catch(error) {
            console.log('error en guardar la palabra');
            return {}
        }
    }
}

export default PalabrasDAOMem