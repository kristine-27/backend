import pool from '../config/db.js';

export const fetch = async () =>  {
    const [rows] = await pool.querey("SELECT * FROM student");
    return rows;
};

//insert
export const insert = async (student) =>{const [result] = await pool.query ("INSERT INTO student(name,author) VALUES (?,?)", 
[student.name, student.author]
);

return result.insertId;
}
