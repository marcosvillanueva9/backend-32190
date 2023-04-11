import type { Producto, Uuid } from "../types/producto.ts";

const productos: Producto[] = []

export const findProductoById = (id: Uuid): Producto => {
    const producto: Producto = <Producto>productos.find((p: Producto) => p.id == id)
    return producto || {}
}

export const findProductos = (): Producto[] => {
    return productos
}

export const createProducto = (
    nombre: string,
    descripcion: string,
    precio: number
): Producto => {
    const producto: Producto = {
        id: globalThis.crypto.randomUUID(),
        nombre,
        descripcion,
        precio
    }
    productos.push(producto)
    return producto
}

export const updateProducto = (
    id: Uuid,
    nombre: string,
    descripcion: string,
    precio: number
): Producto => {
    const producto: Producto = {
        id: id,
        nombre,
        descripcion,
        precio
    }

    const index = productos.findIndex((p: Producto) => p.id == id)
    if (index == -1) {
        throw new Error('Producto no encontrado')
    }
    productos[index] = producto
    return producto
}

export const deleteProducto = (
    id: Uuid
): Producto => {
    const index = productos.findIndex((p: Producto) => p.id == id)
    if (index == -1) {
        throw new Error('Producto no encontrado')
    }
    const deleted = productos.splice(index, 1)
    return deleted[0]
}