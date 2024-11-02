const jwt = require("jsonwebtoken");

function auth(req, res, next) {

    const token = req.headers['authorization'];
    console.log(token)

    if (!token) {
   return res.status(400).send({ msg: "Token não Autenticado" })

}

jwt.verify(token, "segredo", (err, decoded) => {
    if (err) {
        return res.status(400).send({ msg: "Token não Autenticado????????" })
    }
    console.log(decoded) // bar= decoded
    next()
})
}
module.exports = auth;