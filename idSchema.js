import mongoose from "mongoose";

const idSchema = new mongoose.Schema({
    bgmi_id: String,
    name: String,
    login: String,
    id: String,
    password: String,
    
});

const user=mongoose.model("bgmiid", idSchema);
export default user;