const fin = () => console.log("termine")

function mostrarLetras(str, cb) {
    let i = 0
    const timer = setInterval(() => {
        if(i < str.length) {
            console.log(str[i])
            i++
        } else {
            clearInterval(timer)
            cb()
        }
    }, 1000)
}

setTimeout(() => { mostrarLetras('Coder', fin)}, 0)
setTimeout(() => { mostrarLetras('Coder', fin)}, 250)
setTimeout(() => { mostrarLetras('Coder', fin)}, 500)