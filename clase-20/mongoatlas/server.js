import mongoose from "mongoose";

const URL = "mongodb+srv://coderhouse:coderhouse@backend32190.9nw8spr.mongodb.net/?retryWrites=true&w=majority"

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log("conectados correctamente")

