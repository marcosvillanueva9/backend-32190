// function probarTimeout() {
//     let saludar = () => console.log("hola")
//     setTimeout(saludar, 5000)
// }

// probarTimeout()


///////////

function probarSetInterval() {
    let i = 0

    handle = setInterval(() => {
        console.log("hola")
        i++
        if (i == 10) {
            clearInterval(handle)
        }
    }, 2000);
}

probarSetInterval()


setTimeout(() => {
    console.log("chau")
}, 1000)

setTimeout(() => {
    console.log("chau")
}, 2000)

setTimeout(() => {
    console.log("chau")
}, 3000)

setTimeout(() => {
    console.log("chau")
}, 4000)

setTimeout(() => {
    console.log("chau")
}, 5000)

setTimeout(() => {
    console.log("chau")
}, 6000)

