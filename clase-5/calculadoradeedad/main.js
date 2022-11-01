const moment = require('moment')

const hoy = moment()

const nacimiento = moment("21/03/1999", "DD/MM/YYYY")

const diferenciaAnios = hoy.diff(nacimiento, 'years')
const diferenciaDias = hoy.diff(nacimiento, "days")
const diferenciaSegundos = hoy.diff(nacimiento, "seconds")

console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`)
console.log(`Naci el ${nacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado ${diferenciaAnios} anios`)
console.log(`Desde mi nacimiento han pasado ${diferenciaDias} dias`)
console.log(`Desde mi nacimiento han pasado ${diferenciaSegundos} segundos`)