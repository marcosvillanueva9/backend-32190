function sumar(req, res) {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)

    res.send(service.sumar(n1,n2))
}