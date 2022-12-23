const Author = require("../models/author.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function register(data) {
    const salt = await bcrypt.genSalt(10)
    data.password = await bcrypt.hash(data.password, salt)
    // const newAuthor = new Author(data)
    // await newAuthor.save() 
    await Author.create(data)
}

async function login(email, password) {
    const currentAuthor = await Author.findOne({ email })
    console.log(currentAuthor)

    if (currentAuthor) {
        try {
            const isPasswordOk = await bcrypt.compare(password, currentAuthor.password)
            if (isPasswordOk) {
                const token = jwt.sign({ id: currentAuthor._id }, process.env.ACCESSTOKENSECRET, { expiresIn: "1h" })
    
                return {
                    token
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return null
}

module.exports = {
    register,
    login
}