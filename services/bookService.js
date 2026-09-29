import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const book = await bookModel.fetch();
    return fetchAllBooks;
}