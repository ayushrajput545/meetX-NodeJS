const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken');
require('dotenv').config();



//registeruser
exports.signup = async(req,res)=>{

    try{

        const{name , email , password ,phone} = req.body;

        if(!name || !password   || !email || !phone){
            return res.status(401).json({
                success:false,
                message:"All fields required"
            })
        }

         const existingUser = await User.findOne({email});
         if(existingUser){
            return res.status(401).json({
                success:true,
                message:"User already exist! Please Login"
            })
        }


        //hashing pass.
        const hasedPassword = await bcrypt.hash(password , 10);

        //create entry in DB
        const user = await User.create({
            name ,
            email,
            password:hasedPassword, 
            phone
        })

          return res.status(200).json({
            success:true,
            message: "User Ragistered Successfully",
            user
        })
    }
    catch(err){
        console.log(err);
        return res.status(200).json({
            success:false,
            message:'User can not be ragistered ! Please try again',
            error:err.message
        })

    }
}




//login API
exports.login = async(req,res)=>{
    try{

        const{email , password} = req.body;

         if(!email || !password){
            return res.status(401).json({
                success:false,
                message:"All fields are required"
            })
         }

 
        const user = await User.findOne({email}) 
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not found! Please signup"
            })
        }


        if(await bcrypt.compare(password , user.password)){

            //create token
            const payload={
                email:user.email,
                id:user._id,
            }

            const token = jwt.sign(payload ,process.env.JWT_SECRET, {expiresIn:"2h"}); 

            const data = user.toObject();   
            data.token = token
            data.password = undefined

            return res.status(200).json({
                success:true,
                message:"Login Sucessfully",
                data
            })
         }
         else{
             //passowrd not matched
             return res.status(401).json({
                success:false,
                message:'Password is incorrect'
            })
         }

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error in login"
        })
    }
}
