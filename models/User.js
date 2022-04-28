

///notes, we will import model User.js to controllers
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt'); //purpose to encryp file with hash256

const SALT_ROUNDS=6;
const userSchema= new Schema({
    //this tells us what will my form and login information will need below
    //will be string, trim so if user tries to create username with spaces will cut off spaces etc
    //will be unique , required
    //timestamps time it was created
    name:{type: String, required: true},
    // picture:{img:String},
    email: {
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        required:true
    },
    password:{
        type: String,
        trim: true,
        minlength:6,
        required:true,
        
    }
},{
    timestamps:true,
    toJSON: {
        transform:function(doc,ret){
            delete ret.password;
            return ret
        }
    }
});

userSchema.pre('save',async function(next){
        // 'this' is the user doc --Yes i typed it on purpose,for notes.
    if(!this.isModified('password')) return next();
    // update password with hash
    this.password=await bcrypt.hash(this.password,SALT_ROUNDS);
    return next();
    
})

module.exports=mongoose.model('User',userSchema);