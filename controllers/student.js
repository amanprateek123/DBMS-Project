require('dotenv').config()

const db = require('../utils/database')

exports.postStudent = async(req,res)=>{
   let data = req.body
   try{
    const post = await db.student.create({
        name:data.name,
        rollNo:data.roll,
        fees:data.fee,
        subjects:data.sub,
        grades:data.grade,
        scholarship:data.scholar
     });
    res.json({ message: "Successfully Uploaded", status: 201})
   }
   catch(e){
    res.json({ message: "Uploading failed",status: 500 })
   }
}

exports.getStudent = async(req,res)=>{
   try{
   const data = await db.student.findByPk(req.body.enter)
    res.status(201).json({data:data})
   }
   catch(e){
       res.status(404).json({error:e.message})
   }
}