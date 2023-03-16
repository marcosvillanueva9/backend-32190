import PalabrasDAOMem from "./palabrasDAOMem.js";

class PalabrasDAOFactory {
    static get() {
        return new PalabrasDAOMem()
    }
}

export default PalabrasDAOFactory