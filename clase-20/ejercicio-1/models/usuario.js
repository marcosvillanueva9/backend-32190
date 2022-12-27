import mongoose from "mongoose";

const usuariosCollection = "usuarios"

const UsuariosSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: String
})

export const usuarios = mongoose.model(usuariosCollection, UsuariosSchema)