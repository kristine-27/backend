import pool from '../config/db.js';

export const fetch = async () =>  {
    const [rows] = await pool.querey("SELECT * FROM book");
    return rows;
};

//update
export const update = async (book) => {
    const [result] = await pool.query (
        "UPDATE book SET name= ?, author= ? WHERE id= ?",
        [book.name, book.author, book.id]
    );
    return result.affectedRows;
}