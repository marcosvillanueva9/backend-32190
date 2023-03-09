import models from '../models/personas.js'

export const getPersonas = async () => {
    return await models.getPersonas()
}

export const addPersona = async (persona) => {
    await models.addPersona(persona)
}