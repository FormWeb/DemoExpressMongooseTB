const Book = require("../models/book.model")
const Author = require("../models/author.model")

async function addOne(book) {
    const newBook = new Book(book)

    const author = await Author.findById(newBook.author)
    author.books.push(newBook._id)

    await newBook.save()
    await author.save()

    return newBook._id
}

async function getAll() {
    const books = Book.find().populate("author", "firstName lastName -_id")
    return books
}

module.exports = {
    addOne,
    getAll
}