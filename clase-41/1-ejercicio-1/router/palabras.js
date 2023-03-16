import express from "express"
import ControladorPalabras from "../controller/palabras.js"

const router = express.Router()

class RouterPalabras {

    constructor() {
        this.controladorPalabras = new ControladorPalabras()
    }

    start() {
        router.get('/', this.controladorPalabras.obtenerPalabras)
        router.post('/', this.controladorPalabras.guardarPalabra)
        return router
    }
}

export default RouterPalabras