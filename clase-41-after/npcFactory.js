import Persona from './persona.js'
let npc

switch (process.argv[2]) {
    case 'Persona':
        npc = Persona.createPersona('Matias', 'Maranga', 'matikpo@gmail.com')
        break
    default:
        throw new Error('Esa opcion no es valida')
}

class NPCsFactory {
    static getNPC() {
        return npc
    }
}

export default NPCsFactory