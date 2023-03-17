let instance = null

class Persona {
    nombre
    apellido
    mail
    static cantPersonas = 0

    constructor(nombre, apellido, mail) {
        this.nombre = nombre
        this.apellido = apellido
        this.mail = mail

        Persona.cantPersonas++
    }

    static getCantPersonas() {
        console.log(Persona.cantPersonas);
    }

    static createPersona(nombre, apellido, mail) {
        if (!instance) {
            instance = new Persona(nombre, apellido, mail)
        }

        return instance
    }
}

export default Persona