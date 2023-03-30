'use strict'

class PalabraController {
    index ({ request, response, view }) {
        const {palabras} = request.get()
        console.log('Con controller:', palabras)
        let arrayPalabras = palabras.split(' ')
        let arrayPalabrasInvertidas = [...arrayPalabras].reverse()
		response.send(view.render('Palabras', {titulo: 'Con controller', arrayPalabras, arrayPalabrasInvertidas}))
    }
}

module.exports = PalabraController
