const mongoose=require("mongoose");

const userSchema= new mongoose.Schema(
    {
        firstName:{type:String,required:false},
        lastName:{type:String,required:false},
        email:{type:String,required:true},
        password:{type:String,required:true},
        
        
    },
    {
        versionKey:false,
        timestamps:true
    }

    
);

const User=mongoose.model("user",userSchema);

const todoSchema=mongoose.Schema(
{
    title:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true
}
);

const Todo=mongoose.model("todo",todoSchema);

module.exports={User,Todo}