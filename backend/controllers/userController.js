import userModel from "../models/userModel.js";// here where getting error
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";


//login user
const loginUser = async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"User Doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid Crendentials"})

        }
        const token = createToken(user._id);
        res.json({success:true,message:"Login Success",token})
    }catch(error){
console.log(error)
res.json({success:false,message:"Error"})
    }
    
}
const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//reg user
const registerUser = async (req,res)=>{
    const {name,password,email}=req.body;
    try{
        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({success:false,message:"User already exists"})
        }
        //validating email and pass
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter strong password"})
        }
        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt); 
        
        //creating new user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
            
            })
            const user = await newUser.save()
            const token = createToken(user._id)
            res.json({ success: true, token, message: "User created successfully" });
    }catch{
        res.json({success:false,message:"Error creating user"})

    }

}
export {loginUser,registerUser}