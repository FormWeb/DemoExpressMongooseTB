const mongoose = require("mongoose")

const initializeDB = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb://localhost:27017/bookdb", (err) => {
        if (err) return console.log("Erreur : " + err.message)
        console.log("Connecté à la DB !")
    })
}

module.exports = initializeDB