import got from 'got'

const url = 'http://localhost:8080/egreso'

const pedirNumero = () => {
    got(url, { responseType: 'json'})
        .then(resp => {
            let {numeros} = resp.body
            console.log(numeros);
        })
        .catch(err => {
            console.log(err);
        })
}

setInterval(pedirNumero, 10000)