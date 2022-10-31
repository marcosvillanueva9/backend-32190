const fs = require('fs')

try {
    fs.writeFileSync('./fyh.txt', new Date().toLocaleString())
} catch (err) {
    throw new Error('Error en la escritura del archivo: ' + err)
}

try {
    const fechayhora = fs.readFileSync('./fyh.txt', 'hex')
    console.log(fechayhora)
} catch (err) {
    throw new Error('Error en la lectura del archivo:' + err)
}