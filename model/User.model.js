import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required : true,
        unique: true,
    },
    firstname: { type: String},
    lastname: { type: String},
    mobile : { type : Number},
    address: { type: String},
    profile: { type: String}
});

const UserModel = mongoose.model('user',UserSchema);
export default UserModel;