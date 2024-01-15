const mongoose = require('mongoose')



const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'must provide name'],
        trim:true,
        maxlength:[20,'length of the name is not more tha n 20'],
        
},
completed:{
    type:Boolean,
    default:false,
},
})


module.exports =mongoose.model('Task',TaskSchema)