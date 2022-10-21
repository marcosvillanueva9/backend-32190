
funcnombre("Marcos")

funcnombre("Santiago")


function funcnombre(nombre1) {
    console.log(nombre1)
}

// funcion anonima

let func2 = function () {
    console.log("soy una func anonima")
}

// funcion con retorno

function suma(num1, num2) {
    return num1 + num2
}

let resultado = suma(2,3)

function func3() {
    return function() {
        
    }
}