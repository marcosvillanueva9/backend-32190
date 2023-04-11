import { Router } from '../../deps.ts'
import {
    findProducto,
    findProductoById,
    createProducto,
    updateProducto,
    deleteProducto
} from '../controllers/productos.ts'

export const router = new Router()
    .get('/api/productos', findProducto)
    .get('/api/productos/:id', findProductoById)
    .post('/api/productos', createProducto)
    .put('/api/productos/:id', updateProducto)
    .delete('/api/productos/:id', deleteProducto)