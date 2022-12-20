import mongoose from "mongoose";
import * as models from "./models/estudiante.js"

const URL = "mongodb://localhost:27017/colegio"
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("conectados correctamente")

    models.estudiantes.find().sort({nombre: 1})
    .then(estudiantes => {
        console.log("a")
        console.log(estudiantes)
        return
    })
    .then(() => {
        models.estudiantes.find().sort({edad: 1}).limit(1)
        .then(estudiante => {
            console.log("b")
            console.log(estudiante)
            return
        })
        return
    })
    .then(() => {
        models.estudiantes.find({ curso: "2A" })
        .then(estudiantes => {
            console.log("c")
            console.log(estudiantes)
            return
        })
        return
    })
    .then(() => {
        models.estudiantes.find().sort({edad: 1}).limit(1).skip(1)
        .then(estudiante => {
            console.log("d")
            console.log(estudiante)
            return
        })
        return
    })
    .then(() => {
        models.estudiantes.find({}, {nombre: 1, apellido: 1, curso: 1, _id: 0}).sort({apellido: -1})
        .then(estudiante => {
            console.log("e")
            console.log(estudiante)
            return
        })
        return
    })
    .then(() => {
        models.estudiantes.find({nota: 10})
        .then(estudiante => {
            console.log("f")
            console.log(estudiante)
            return
        })
        return
    })
    .then(() => {
        models.estudiantes.find()
        .then(estudiantes => {
            console.log("g")
            let notaTotal = 0
            estudiantes.forEach(estudiante => {
                notaTotal += estudiante.nota
            })
            console.log(`nota promedio: ${notaTotal/estudiantes.length}`)
            return
        })
        return
    })
    .then(() => {
        models.estudiantes.find({curso: "1A"})
        .then(estudiantes => {
            console.log("h")
            let notaTotal = 0
            estudiantes.forEach(estudiante => {
                notaTotal += estudiante.nota
            })
            console.log(`nota promedio: ${notaTotal/estudiantes.length}`)
            return
        })
        return
    })
})
