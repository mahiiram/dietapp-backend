import mongoose, { model } from 'mongoose';


const weightLossShcema = new mongoose.Schema ({
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
const Weightlossmodel = mongoose.model('weightloss',weightLossShcema)

export default Weightlossmodel;