import { Schema } from "../config/database"
import userSchema from "./User"


const userSchema= new Schema({
    email:{type:Schema.Types.ObjectId, ref:"User"}
},{
    timestamps:true
})
module.exports=userSchema;