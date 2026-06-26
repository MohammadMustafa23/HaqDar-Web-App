import UserModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { OAuth2Client } from "google-auth-library";
import UserProfileModel from '../models/userProfile.model.js';
import { redisClient } from '../config/redis.js'

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);8

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
            message : 'In-valid Password'
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

export const GoogleLogin = async (req, res) => {
  try {
    const { accessToken } = req.body;
    const googleResponse = await fetch(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const userInfo = await googleResponse.json();

    const { name, email, id } = userInfo;
    console.log(userInfo);
    

    let user = await UserModel.findOne({
      email,
    });

    if (!user) {
      user = await UserModel.create({
        userName : name,
        email : email,
        password : id 
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

     res.cookie("token", token, {
       httpOnly: true,
       maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
      success: true,
      message : "Login Sucessfull"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Google Login Failed",
    });
  }
};

export function VerifyUser(req, res) {
    res.status(200).json({
      success: true,
      user: req.user,
  });
}

export async function VerifyProfile(req, res) {
  try {
    const userId = req.user.id;
    const cacheKey = `profile:${userId}`;

    // Check Redis
    const cachedProfile = await redisClient.get(cacheKey);

    if (cachedProfile) {
      console.log("✅ Profile from Redis");
      return res.status(200).json(JSON.parse(cachedProfile));
    }

    // Fetch from MongoDB
    const profile = await UserProfileModel.findOne({
      userId,
    });

    const response = {
      success: true,
      profileCompleted: !!profile,
      profile,
      user: req.user,
    };

    // Save to Redis for 5 minutes
    await redisClient.setEx(cacheKey,600,JSON.stringify(response));

    console.log("📦 Profile saved to Redis");

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
    });
  }
}