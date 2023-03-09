import models from '../models/personas.js'
import PrimeraConexion from './singleton.js'

export const getPersonas = async () => {
    return await models.getPersonas()
}

export const addPersona = async (persona) => {
    await models.addPersona(persona)
}

export const obtenerHora = async () => {
    return new PrimeraConexion().obtenerHora()
}