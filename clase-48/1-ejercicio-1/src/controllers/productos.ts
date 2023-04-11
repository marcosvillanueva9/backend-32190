import { Context, helpers } from '../../deps.ts'
import type { Producto } from '../types/producto.ts'
import * as db from '../db/productos.ts'

export const findProducto = async (ctx: Context) => {
    try {
        const productos: Producto[] = await db.findProductos()
        ctx.response.body = productos
    } catch (err) {
        ctx.response.status = 404
        ctx.response.body = { msg: err }
    }
}

export const findProductoById = async (ctx: Context) => {
    try {
        const id = helpers.getQuery(ctx, { mergeParams: true}).id
        const producto: Producto = await db.findProductoById(id)
        ctx.response.body = producto

    } catch (err) {
        ctx.response.status = 404
        ctx.response.body = { msg: err }
    }
}

export const createProducto = async (ctx: Context) => {
    try {
        const { nombre, descripcion, precio } = await ctx.request.body().value
        const productoCreated: Producto = await db.createProducto(nombre, descripcion, precio)
        ctx.response.body = productoCreated
    } catch (err) {
        ctx.response.status = 500
        ctx.response.body = { msg: err }
    }
}

export const updateProducto = async (ctx: Context) => {
    try {
        const id = helpers.getQuery(ctx, { mergeParams: true}).id
        const { nombre, descripcion, precio } = await ctx.request.body().value
        const productoUpdated: Producto = await db.updateProducto(id, nombre, descripcion, precio)
        ctx.response.body = productoUpdated
    } catch (err) {
        ctx.response.status = 500
        ctx.response.body = { msg: err }
    }
}

export const deleteProducto = async (ctx: Context) => {
    try {
        const id = helpers.getQuery(ctx, { mergeParams: true}).id
        const productodeleted: Producto = await db.deleteProducto(id)
        ctx.response.body = productodeleted
    } catch (err) {
        ctx.response.status = 500
        ctx.response.body = { msg: err }
    }
}