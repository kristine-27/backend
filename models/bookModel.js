import pool from '../config/db.js';

export const fetch = async () =>  {
    const [rows] = await pool.querey("SELECT * FROM book");
    return rows;
};