import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async() =>{
    const book = await studentModel.fetch();
    return student;
}

export const createstudent = async (student) =>{
    const studentId = await studentModel.insert(student);
    return studentId;
}
