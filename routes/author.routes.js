const express = require("express")
const authorController = require("../controllers/author.controller")
const authorRouter = express.Router()

authorRouter.post("/register", authorController.register)
authorRouter.post("/login", authorController.login)

module.exports = authorRouter