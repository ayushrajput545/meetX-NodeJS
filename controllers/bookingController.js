const Activity = require("../models/Activity")
const Booking = require("../models/Booking")


// Book an activity
exports.bookActivity = async(req,res)=>{

    try{
        const {activityId} = req.body
        const userId = req.user.id

        const activity = await Activity.findById(activityId)
        if(!activity){
            return res.status(404).json({
                success:false,
                message:"Activity Not Found"
            })
        }

        const booking = await Booking.create({user:userId , activity:activityId});

        return res.status(200).json({
            success:true,
            message:"Activity Booked",
            booking     
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


// get my booking
exports.getMyBooking = async(req,res)=>{
    try{
        const userid = req.user.id
        const booking  = await Booking.find({user:userid}).populate('activity')
        return res.status(200).json({
            sucess:true,
            booking
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