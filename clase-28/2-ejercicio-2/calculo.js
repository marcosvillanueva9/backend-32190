function calculo() {
    let sum = 0
    for (let i= 0; i < 5e9; i++) {
        sum += i
    }
    return sum
}

process.on('exit', () => {
    console.log('hilo terminado: ' + process.pid)
})

process.on('message', msg => {
    console.log(msg)
    console.log('hilo iniciado: ' + process.pid);

    const result = calculo()
    process.send(result)
    process.exit()
})

process.send('listo')