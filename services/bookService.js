import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const book = await bookModel.fetch();
    return fetchAllBooks;
}

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}

export const update = async (book) => {
    const [result] = await pool.query(
        "UPDATE book SET name = ?, author = ? WHERE id = ?",
        [book.name, book.author, book.id]
    );
    return result.affectedRows;
}

export const deleteBook = async (id) => {
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}