const fs = require('fs')

fs.promises.readFile('./info.txt', 'utf-8')
    .then(data => {
        const info = JSON.parse(data)
        console.log(info)

        const pkgObj = info.contenidoObj

        pkgObj.author = 'Coderhouse'

        fs.promises.writeFile('./package.json.coder', JSON.stringify(pkgObj, null, 2))
            .then(() => {
                console.log('escritura exitosa')
            })
            .catch(err => {
                console.log('error en la escritura')
            })
    })
    .catch(err => console.log('error en la lectura'))