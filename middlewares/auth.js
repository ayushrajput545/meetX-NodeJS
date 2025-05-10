const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = async(req,res , next)=>{
    try{
        
        const token =  req.header("Authorization")?.replace("Bearer ", "");
        // console.log(token)
         
        if(!token){
            return res.status(401).json({
                sucess:false,
                message:"Token missing"
            })
        }

        try{
            const decode = await jwt.verify(token , process.env.JWT_SECRET);
            req.user = decode;

        }
        catch(err){
            return res.status(401).json({
                sucess:false,
                message:"Token is invalid"
            })

        }
        next();


    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Internal Server Error in auth"
        })
    }

}
