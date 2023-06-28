import Weightgainmodel from "../model/Weightgainmodel.js";





export async function  getweightgainfoods (req,res){
    let foods;
    try{
       foods = await Weightgainmodel.find().populate().lean()
    }catch(err){
        return console.log(err)
    }
    if(!foods){
        return res.status(500).json({message:'Unexpected error occured'})
    }
    return res.status(201).json({
       foods
    })
}
export async function Weightgain (req,res){
    const {images,name,calorie} = req.body
     
    let newmodel;
    try {
        newmodel = new Weightgainmodel({
            images,
            name,
            calorie
        })
        newmodel = await newmodel.save()
    } catch (error) {
        return console.log(error)
    }
    if(!newmodel){
        return res.status(500).send({
            msg:'unexpected error occured'
        })
    }
    return res.status(201).json({newmodel, msg:'model created successfully'})
}
