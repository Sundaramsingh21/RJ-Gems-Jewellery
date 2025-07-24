import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sundaramsingh:sundaram21@cluster0.lhkaris.mongodb.net/RJGems').then(()=>console.log("DB Connected"));
}