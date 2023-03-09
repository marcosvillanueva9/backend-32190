import * as services from '../services/personas.js'

export const getHTMLOnWire = async (req, res) => {
    const personas = await services.getPersonas()
    res.render('plantilla-html-onwire', { personas: personas })
}

export const postHTMLOnWire = async (req, res) => {
    let persona = req.body
    await services.addPersona(persona)
    res.redirect('/html-onwire')
}