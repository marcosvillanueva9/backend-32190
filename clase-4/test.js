const fs = require('fs')

class Contenedor {
    constructor(nombre) {
        this.nombre = nombre
    }

    save(obj) {
        fs.writeFileSync(nombre, obj)
    }
}