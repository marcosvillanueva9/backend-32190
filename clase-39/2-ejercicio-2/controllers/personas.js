import * as services from '../services/personas.js'

//--------------------------------//
//          HTML ON WIRE          //
//--------------------------------//

export const getHTMLOnWire = async (req, res) => {
    const personas = await services.getPersonas()
    res.render('plantilla-html-onwire', { personas: personas })
}

export const postHTMLOnWire = async (req, res) => {
    let persona = req.body
    await services.addPersona(persona)
    res.redirect('/html-onwire')
}

//--------------------------------//
//          DATA ON WIRE          //
//--------------------------------//

export const getDataOnWire = async (req, res) => {
    res.sendFile(process.cwd() + '/views/plantilla-data-onwire.html')
}

export const postDataOnWire = async (req, res) => {
    let persona = req.body
    await services.addPersona(persona)
    res.json({persona})
}

export const getJSON = async (req, res) => {
    const personas = await services.getPersonas()
    res.json({ personas: personas })
}