const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (authHeader) {
        // "Bearer fdsoifndsfundsfi"
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.ACCESSTOKENSECRET, (err, author) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.author = author
            console.log(req.author)
            next()
        })
    }
    else {
        res.sendStatus(401)
    }
}

module.exports = authMiddleware