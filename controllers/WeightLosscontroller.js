import Weightlossmodel from "../model/Weightlossmodel.js";

export async function  getweightlossfoods (req,res){
    let weightlossfoods;
    try{
        weightlossfoods = await Weightlossmodel.find().populate()
    }catch(err){
        return console.log(err)
    }
    if(!weightlossfoods){
        return res.status(500).json({message:'Unexpected error occured'})
    }
    return res.status(201).json({
        weightlossfoods,
        message:'Successfully get all the foods'
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
