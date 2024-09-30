import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://fooddelapp:29032001@cluster0.xgo7k.mongodb.net/food-del').then(()=>{console.log("DB connected")})
}
