import got from 'got'

const url = 'http://localhost:8080'

got(url, {responseType: 'json'})
    .then(resp => {
        let fyh = resp.body
        console.log(fyh);
    })
    .catch(err => {
        console.log(err);
    })
