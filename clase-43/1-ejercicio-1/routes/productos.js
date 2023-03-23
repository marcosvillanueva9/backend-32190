var express = require('express');
var router = express.Router();

const productos = []

function makeRandomId() {
    const nums = []
    for (let i = 0; i < 8; i++) {
        nums.push(Math.floor(10 * Math.random()))
    }
    return `${Date.now()}-${nums.join('')}`
}

router.get('/', function(req, res, next) {
  res.json(productos);
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id
    const producto = productos.find(p => p.id == id)
    res.json(producto);
});

router.post('/', function(req, res, next) {
    const { nombre, precio } = req.body
    const newProducto = { id: makeRandomId(), nombre, precio: Number(precio)}
    productos.push(newProducto)
    res.status(201).json(newProducto);
});

router.put('/:id', function(req, res, next) {
    const id = req.params.id
    const { nombre, precio } = req.body
    const producto = {id, nombre, precio}

    const index = productos.findIndex(p => p.id == id)
    if (index == -1) {
        return res.sendStatus(404)
    }
    productos.splice(index, 1, producto)
    res.json(producto);
});

router.delete('/:id', function(req, res, next) {
    const id = req.params.id

    const index = productos.findIndex(p => p.id == id)
    if (index == -1) {
        return res.sendStatus(404)
    }
    productos.splice(index, 1)
    res.status(204).json(id);
});

module.exports = router;
