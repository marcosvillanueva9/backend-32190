function auth(req, res, next) {
    if (req.header('secret') === '123456') {
        next()
    } else {
        res.status(403).send('Forbidden')
    }
}

export default {
    auth
}