import Weightlossmodel from "../model/Weightlossmodel.js";

export async function  getweightlossfoods (req,res){
    let foods;
    try{
       foods = await Weightlossmodel.find().populate().lean()
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
export async function WeightLoss (req,res){
    const {images,name,calorie} = req.body
     
    let newmodel;
    try {
        newmodel = new Weightlossmodel({
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
