import axios from 'axios'

const url = 'http://localhost:8080'

axios(url)
    .then(resp => {
        let fyh = resp.data
        console.log(fyh);
    })
    .catch(err => {
        console.log(err);
    })
