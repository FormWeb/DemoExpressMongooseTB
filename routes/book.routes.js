const express = require("express")
const bookController = require("../controllers/book.controller")
const authMiddleware = require("../middleware/auth.middleware")
const bookRouter = express.Router()

bookRouter.get("/", bookController.getAll)
bookRouter.post("/", authMiddleware, bookController.addOne)

module.exports = bookRouter