import mongoose, { model } from 'mongoose';


const weightgainShcema = new mongoose.Schema ({
    images:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    calorie:{
        type:String,
        required:true
    }
})
const Weightgainmodel = mongoose.model('weightgain',weightgainShcema)

export default Weightgainmodel;