const authorService = require("../services/author.service")

const authorController = {
    register: async(req, res) => {
        console.log(req.body)
        try {
            await authorService.register(req.body)
            res.sendStatus(201)
        }
        catch (err) {
            console.log(err.message)
            res.status(500).json({ error: err.message })
        }
    },

    login: async(req, res) => {
        // Récup param : req.params
        const { email, password } = req.body
        const token = await authorService.login(email, password)
        if (!token) res.status(500).json({ erreur: "Combinaison incorrect !" })
        else res.status(200).json(token)
    }
}

module.exports = authorController