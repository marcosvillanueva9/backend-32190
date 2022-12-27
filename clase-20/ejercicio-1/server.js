import mongoose from "mongoose";
import * as models from "./models/usuario.js"

const URL = "mongodb+srv://coderhouse:coderhouse@backend32190.9nw8spr.mongodb.net/ecommerce?retryWrites=true&w=majority"

try {
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("conectados correctamente")

    const usuarios = await models.usuarios.find()

    console.log(usuarios)

    const newusuario = new models.usuarios({
        nombre: "Federico",
        apellido: "Perez",
        dni: "12345678"
    })
    await newusuario.save()
    console.log("usuario agregado correctamente!")

} catch (error) {
    console.log(error)
} finally {
    mongoose.disconnect()
}
