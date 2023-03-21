import axios from 'axios'

const url = 'http://localhost:8080/ingreso'

const enviarNumero = () => {
    axios.post(url, { numero: Math.random()})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

setInterval(enviarNumero, 2000)
enviarNumero()