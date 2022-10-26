const escribirArchivo = require("./escrArch.js")

console.log("inicio")

escribirArchivo("hola mundo, como va?", () => {
    console.log("finalice de escribir")
})

console.log("fin")