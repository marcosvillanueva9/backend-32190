const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

function getNombres(prods) {
    const nombres = []
    for (const producto of prods) {
        nombres.push(producto.nombre)
    }
    return nombres.join(',')
}

console.log(getNombres(productos))

///////////////////////////////////////////////////////////

function getPrecioTotal(prods) {
    let precioTotal = 0
    for (const producto of prods) {
        precioTotal += producto.precio
    }
    return to2decimales(precioTotal)
}

console.log(getPrecioTotal(productos))

///////////////////////////////////////////////////////////

function getPrecioPromedio(prods) {
    if (prods.length == 0) {
        return 0
    }
    return getPrecioTotal(prods) / prods.length
}

console.log(getPrecioPromedio(productos))

///////////////////////////////////////////////////////////

function getProdMasBarato(prods) {
    if (prods.length == 0) {
        return 0
    }

    let precioBarato = prods[0].precio
    let prodBarato = prods[0].nombre

    for (const producto of prods) {
        if (producto.precio < precioBarato) {
            precioBarato = producto.precio
            prodBarato = producto.nombre
        }
    }

    return `El producto mas barato es ${prodBarato}, con un precio de $${precioBarato}`
}

console.log(getProdMasBarato(productos))

///////////////////////////////////////////////////////////

function getProdMasCaro(prods) {
    if (prods.length == 0) {
        return 0
    }

    let precioCaro = prods[0].precio
    let prodCaro = prods[0].nombre

    for (const producto of prods) {
        if (producto.precio > precioCaro) {
            precioCaro = producto.precio
            prodCaro = producto.nombre
        }
    }

    return `El producto mas caro es ${prodCaro}, con un precio de $${precioCaro}`
}

console.log(getProdMasCaro(productos))

///////////////////////////////////////////////////////////

const info = {
    nombres: getNombres(productos),
    totalDePrecios: getPrecioTotal(productos),
    promedioDePrecios: getPrecioPromedio(productos),
    productoMasBarato: getProdMasBarato(productos),
    productoMasCaro: getProdMasCaro(productos)
}

console.log(info)

///////////////////////////////////////////////////////////

function to2decimales(val) {
    return Number(val.toFixed(2))
}
