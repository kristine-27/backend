import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const book = await bookModel.fetch();
    return fetchAllBooks;
}

//update
export const update = async (book) => {
    const [result] = await pool.query (
        "UPDATE book SET name= ?, author= ? WHERE id= ",
        [book.name, book.author, book.id]
    );
    return result.affectedRows;
}