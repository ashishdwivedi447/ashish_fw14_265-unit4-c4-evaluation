const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://ashish123456:ashish123456@cluster0.qpmf2.mongodb.net/final?retryWrites=true&w=majority"
    )
}