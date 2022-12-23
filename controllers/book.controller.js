const bookService = require("../services/book.service")

const bookController = {
    addOne: async(req, res) => {
        try {
            req.body.author = req.author.id
            const id = await bookService.addOne(req.body)
            res.status(201).json({
                message: "Added",
                id
            })
        }
        catch (err) {
            res.status(500).json({
                erreur: err.message
            })
        }
    },

    getAll: async(req, res) => {
        const books = await bookService.getAll()
        res.status(200).json(books)
    }
}

module.exports = bookController