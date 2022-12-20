import mongoose from 'mongoose'

const estudiantesCollName = 'estudiantes'

const estudiantesSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    dni: {type: String, required: true, unique: true},
    curso: {type: String, required: true},
    nota: {type: Number, required: true},
    ingreso: {type: Boolean}
})

export const estudiantes = mongoose.model(estudiantesCollName, estudiantesSchema)