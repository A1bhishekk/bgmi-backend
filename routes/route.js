import express from 'express';
import user from '../idSchema.js';

const router = express.Router();

router.get('/bgmiid',async (req, res) => {
    try {
        const users=await user.find({});
        res.status(200).json(users);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

router.post('/bgmiid',async (req,res)=>{
    const {bgmi_id,name,login,id,password}=req.body;
    try{
        const newUser=new user({bgmi_id,name,login,id,password});
        await newUser.save();
        res.status(201).json({message:"ID added successfully"});
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
});

router.delete('/bgmiid/:bgmi_id',async (req,res)=>{
    const {bgmi_id}=req.params;
    try{
        await user.findOneAndDelete({bgmi_id});
        res.status(201).json({message:"ID deleted successfully"});
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
});

// update route
// router.put('/bgmiid/:bgmi_id',async (req,res)=>{
//     const {bgmi_id}=req.params;
//     const {name,login,id,password}=req.body;
//     try{
//         await user.findOneAndUpdate({bgmi_id},{name,login,id,password});
//         res.status(201).json({message:"ID updated successfully"});
//     }
//     catch(error){
//         res.status(409).json({message:error.message});
//     }
// });
    




export default router;