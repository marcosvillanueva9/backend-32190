const args = process.argv
const numbers = args.slice(2)

process.on("exit", code => {
  if(code){
    console.log("saliendo con el codigo " + code)
  }else{
    console.log("salio sin errores")
  }
})

process.on("uncaughtException", error => {
  console.log(error)
  switch (error.descripcion) {
    case 'entrada vacia': return process.exit(-4)
    case 'error de tipo': return process.exit(-5)
  }
})

function validateNumbers(numbers){
  if(numbers.length == 0){
    throw {descripcion: 'entrada vacia'}
  }
  
  for(const numb of numbers){
    const val = Number(numb)
   
    if(isNaN(val)){
      throw{
        descripcion: 'error de tipo',
      	numeros: numbers,
        tipos: numbers.map(n => isNaN(n) ? typeof n : 'number')
      }
    }
  }
}
  
function avg(numbers){    // "12"  ---> 12
  let total = 0
  
  for(const num of numbers){
    const val = Number(num)
    
    total += val
  }
  
  return total / numbers.length
}
  
validateNumbers(numbers)

const datos = {
	  numeros: numbers,
  	promedio: avg(numbers),
  	max: Math.max(...numbers),
  	min: Math.min(...numbers),
  	ejecutable: process.execPath.split('/').pop(),
  	pid: process.pid
}
  
console.log(datos)
  
  
  