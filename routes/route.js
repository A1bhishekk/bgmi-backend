import express from 'express';
import user from '../idSchema.js';

const router = express.Router();


// get all the data
router.get('/bgmiid',async (req, res) => {
    try {
        const users=await user.find({});
        res.status(200).json(users);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

// get single user
router.get('/bgmiid/:id',async (req, res) => {
    const {id}=req.params;
    try {
        const users=await user.findById(id);
        res.status(200).json(users);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
});


// add user

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

// delete user

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
router.put('/bgmiid/:_id',async (req,res)=>{
    const {_id}=req.params;
    // console.log(req.params);
    const {name,login,id,password,bgmi_id}=req.body;
    try{
        await user.findOneAndUpdate({_id},{name,login,id,password,bgmi_id});
        res.status(201).json({message:"ID updated successfully"});
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
});



export default router;