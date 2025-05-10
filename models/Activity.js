const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String
    },

    location:{
        type:String,
        required:true
    },

    date:{
        type:Date
    }

})

module.exports = mongoose.model('Activity', activitySchema)