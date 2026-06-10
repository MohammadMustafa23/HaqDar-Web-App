import UserModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function RegisterUser(req,res) {
    const { userName , email , password } = req.body;

    const IfUserExist = await UserModel.findOne({email})

    
    if(IfUserExist) {
        return res.status(409).json({
            message : 'User Already Exist'
        })
    }

    const hashPassword = await bcrypt.hash(password,8);
    const user = await UserModel.create({
        email,
        password : hashPassword,
        userName
    });


    res.status(201).json({
        message : "User Register Sucessfully",
        user
    })
}


export async function LoginUser(req,res) {
    const { email , password } = req.body;

    const IfUserExist = await UserModel.findOne({email})

    if(!IfUserExist) {
        return res.status(404).json({
            message : 'User Not Found'
        })
    }
    

    const isMatch = await bcrypt.compare(password,IfUserExist.password);
    if(!isMatch) {
        return res.status(400).json({
            message : 'InValid Password'
        })
    }


    const token = jwt.sign({
        userId : IfUserExist._id 
    },process.env.JWT_SECRET,{
        expiresIn : "7d"
    })

    res.cookie("token", token, {
       httpOnly: true,
       maxAge: 7 * 24 * 60 * 60 * 1000
    });


    res.status(200).json({
     message: "Login Successful"
    });
}



