Promise.resolve(20)
.then(x => x + 1) // 21
.then(x => x * 2) // 42
.then(x => {
    if (x==22) throw 'Error' // no entra
    else return 80  // 80
})
.then(x => 30)  // 30
.then(x => x / 2) // 15
.then(x => console.log(x)) // imprime 15
.catch(err => console.log(err))

Promise.resolve(10)
.then(x => x + 1) // 11
.then(x => x * 2) // 22
.then(x => {
    if (x==22) throw 'Error' // si entra
    else return 80 
})
.then(x => 30) 
.then(x => x / 2)
.then(x => console.log(x))
.catch(err => console.log(err))

Promise.reject(30)
.then(x => x + 1) // 11
.then(x => x * 2) // 22
.then(x => {
    if (x==22) throw 'Error' // si entra
    else return 80 
})
.then(x => 30) 
.then(x => x / 2)
.then(x => console.log(x))
.catch(err => console.log(err))