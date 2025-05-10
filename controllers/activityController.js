const Activity = require("../models/Activity")


//create activity
exports.activity = async(req,res)=>{

    try{
        const { title , description ,location ,date} = req.body

        if(!title ||  !location){
            return res.status(404).json({
                success:false,
                message:"All fields are required"
            })
        }

        const newActivity = await Activity.create({title , description ,location , date})

        return res.status(200).json({
            success:true,
            message:"Activity Created Sucessfully",
            newActivity
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}


//getActivity
exports.listActivity = async(req,res)=>{
    try{

        const activities = await Activity.find();

        return res.status(200).json({
            success:true,
            message:"Activities fetched Sucessfully",
            activities
        })

    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}