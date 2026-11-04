import * as  studentService from '../services/studentService.js' 

export const fetchAllStudent = async (req, res) =>{
    const student= await studentService.fetchAllStudent();
    res.status(200).json(student);
};
export const insertStudent = async (req, res) => {
    console.log(req);
    const { name, age } = req.body;
    const student = { name, age };

    try{
        const studentID = await studentService.insertStudent(student);
        res.status(200).json({
            success: true,
            message: studentID
        });
    } catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
    }

 export const editStudent = async (req, res) => {
    const {name, age} = req.body;
    const {id} = req.params;
    const student = { name, age, id };

    try {
        const updatedStudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedStudent = await studentService.deleteStudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
