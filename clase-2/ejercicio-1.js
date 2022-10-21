function mostrarLista (arr) {
    if (arr.length == 0) {
        console.log("La lista esta vacia");
        return;
    }

    console.log(arr);
}

mostrarLista([2])
mostrarLista([2,3]);

(function mostrarLista(arr) {
    if (arr.length == 0) {
        console.log("La lista esta vacia")
        return
    }

    console.log(arr)
})([1,2,3])


function crearMultiplicador(num) {
    return function(num2) {
        console.log(num * num2)
    }
}

const duplicador = crearMultiplicador(2)
const triplicador = crearMultiplicador(3)

duplicador(6)
triplicador(6)

crearMultiplicador(3)(5)


class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}


let persona1 = new Persona("marcos", 23)

let persona2 = { nombre: "marcos", edad: 23 }

console.log(persona1)
console.log(persona2)