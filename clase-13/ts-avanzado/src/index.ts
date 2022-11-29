import * as operaciones from './lib/operaciones'

const mensaje:string = "hola typescript"

console.log(mensaje)

let num1:number = 6
let num2:number = 4

console.log(`La suma de ${num1} y ${num2} es de ${operaciones.sumar(num1,num2)}`)
console.log(`La resta de ${num1} y ${num2} es de ${operaciones.restar(num1,num2)}`)
console.log(`La multiplicacion de ${num1} y ${num2} es de ${operaciones.mult(num1,num2)}`)
console.log(`La division de ${num1} y ${num2} es de ${operaciones.div(num1,num2)}`)