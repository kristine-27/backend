import * as  studentService from '../services/studentService.js' 

export const fetchAllStudent = async (req, res) =>{
    const student= await studentService.fetchAllStudent();
    res.status(200).json(student);
};
export const createStudent = async (req,res) =>{console.log(req);
const {name, author} = req.body;
const student = {name, author};

try{
    const studentId = await
      studentService.createStudent
      (student);
    res.status(200).json({
        success: true, 
        message: studentId
    });
}catch(e){
  console. log(e);
  re.status(500).json({
    error: "Internal Server Error"
  });
}
}
