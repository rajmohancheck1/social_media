const mongoose=require('mongoose');
const {connectionUrl}=require("../config/keys");
const connectMongodb=async()=>{
    try{
        await mongoose.connect(connectionUrl);
        console.log("database connected succesfully")

    }catch(err){
        console.log(err);
    }
}
module.exports=connectMongodb;