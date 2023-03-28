export default class RecordatoriosDao {

    constructor() {
        this.recordatorios = []
    }

    getRecordatorios() {
        return this.recordatorios
    }
    
    createRecordatorio(nuevoRecordatorio) {
        console.log(nuevoRecordatorio);
        this.recordatorios.push(nuevoRecordatorio)
        return nuevoRecordatorio
    }
    
    marcarLeidoRecordatorio(id) {
        const index = this.recordatorios.findIndex(r => r.id == id)
        const recordatorio = this.recordatorios.find(r => r.id == id)
        if (!recordatorio) {
            throw new Error('No encontrado')
        }
    
        recordatorio.leido = true
        this.recordatorios.splice(index, 1, recordatorio)
        return recordatorio
    }
    
    deleteRecordatoriosLeidos() {
        const deleted = []
        for (let rec of this.recordatorios) {
            if (rec.leido) {
                let index = this.recordatorios.findIndex(r => r.id == rec.id)
                deleted.push(this.recordatorios.splice(index, 1)[0])
            }
        }
    
        return deleted
    }
}