const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Book = new Schema({
    title: { type: String, required: true },
    synopsis: { type: String, default: "" },
    author: { type: ObjectId, ref: "Author", required: true }
})

module.exports = mongoose.model("Book", Book)