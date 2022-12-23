require("dotenv").config()
var cors = require("cors")
const express = require("express")
const initializeDB = require("./config/db")
const authorRouter = require("./routes/author.routes")
const authMiddleware = require("./middleware/auth.middleware")
const bookRouter = require("./routes/book.routes")

const app = express()

app.use(cors())
app.use(express.json())

initializeDB()

app.use("/author", authorRouter)
app.use("/book", bookRouter)

app.get("/hello", authMiddleware, (req, res) => {
    res.json({ message: "Hello" })
})

app.listen(process.env.PORT, () => {
    console.log("Listen to port " + process.env.PORT)
})