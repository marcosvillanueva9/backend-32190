import mongoose from "mongoose";
import * as models from "./models/estudiante.js"

try {
    const URL = "mongodb://localhost:27017/colegio"

    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("conectados correctamente")

    console.log("1) //////////////////////////////////")
    let rta = await models.estudiantes.updateOne({nombre: "Lucas", apellido: "Blanco"},
    { $set: {dni: "20355875"}}) 
    console.log(rta)

    console.log("2) //////////////////////////////////")
    rta = await models.estudiantes.updateMany({},
    { $set: {ingreso: false}}) 
    console.log(rta)

    console.log("3) //////////////////////////////////")
    rta = await models.estudiantes.updateMany({curso: "1A"},
    { $set: {ingreso: true}}) 
    console.log(rta)

    console.log("4) //////////////////////////////////")
    rta = await models.estudiantes.find({nota: {$gte: 4}}, {_id: 0, __v: 0})
    console.log(rta)

    console.log("5) //////////////////////////////////")
    rta = await models.estudiantes.find({ingreso: true}, {_id: 0, __v: 0})
    console.log(rta)

    console.log("6) //////////////////////////////////")
    rta = await models.estudiantes.deleteMany({ingreso: true})
    console.log(rta)

    console.log("7) //////////////////////////////////")
    let estud = await models.estudiantes.find({}, {__v: 0})
    estud.forEach(estudiante => {
        console.log(
            JSON.stringify(estudiante),
            '-> fecha de creacion: ',
            new Date(estudiante._id.getTimestamp()).toLocaleString()
        )
    });

} catch (err) {
    console.log("se pudrio todo, ", err)
} finally {
    await mongoose.disconnect()
}