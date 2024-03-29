import {Request,Response} from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user_schema'

const register=async(req:Request,res:Response)=>{
    try {
        const {name,email,password,branch,year}=req.body
        if(!name||!email||!password)
            return res.status(400).json({msg:"Enter mandatory details as name, email, password can't be empty"})
            const hashedPassword = await bcrypt.hash(password, 10)
        const savingData=await User.create({
            name,
            email,
            password:hashedPassword,
            branch,
            year,
        })
        // console.log(saving)
        return res.status(200).json({
            msg:"User registered successfully",
            email:savingData.email
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({error:"Error occured while registering, try again!"})
    }
}
const login=async(req:Request,res:Response)=>{
    try {
        const{email,password,rememberMe}=req.body
        if(!email||!password)
            return res.status(400).json({error:"Enter email and password to continue!"})
        const checkUser=await User.findOne({email})
        if(!checkUser)
            return res.status(404).json({message:"Email isn't registered, register to continue"})
        const time= rememberMe ? '2d' : '2h'
        return res.status(200).json({msg:"logged in successfully"})
    } catch (error) {
        console.error(error)
    }
}

const user={
    register,
    login
}

export default user