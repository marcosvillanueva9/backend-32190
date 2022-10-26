// const sumar = num1 => {
//     return num1 + num1
// }

// const sumar2 = num1 => {console.log()} // aca el return esta implicito

// class Persona {

//     constructor() {

//     }

//     hablar(mensaje) {
//         console.log(mensaje)
//     }
// }
// let p = new Persona
// p.hablar("hola")


///////////

let finish = num => {
    console.log(num)
}

function suma(num1, num2, fini) {
    setTimeout(() => {
        console.log(num1 + num2)
    }, 10000)

    fini(num1)
}

let num = 3

suma(2, 3, finish)




