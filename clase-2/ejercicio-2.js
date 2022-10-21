class Contador {
    constructor(nombre) {
        this.nombre = nombre
        this.cuentaLocal = 0
    }

    static cuentaGlobal = 0

    contar() {
        this.cuentaLocal++
        Contador.cuentaGlobal++
    }

    obtenerResponsable() {
        return this.nombre
    }

    obtenerCuentaLocal() {
        return this.cuentaLocal
    }

    obtenerCuentaGlobal() {
        return Contador.cuentaGlobal
    }
}

const pepe = new Contador("pepe")
const juana = new Contador("juana")

console.log(juana.obtenerResponsable())
juana.contar()
juana.contar()
juana.contar()

console.log(juana.obtenerCuentaLocal())
console.log(juana.obtenerCuentaGlobal())

console.log(pepe.obtenerResponsable())
pepe.contar()
pepe.contar()

console.log(pepe.obtenerCuentaLocal())
console.log(pepe.obtenerCuentaGlobal())