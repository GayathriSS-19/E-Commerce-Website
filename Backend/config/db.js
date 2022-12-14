const mongoose =require("mongoose")

const connectDB = async () =>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })     //second argument is optional parameters
        console.log(`Mongodb connected:${conn.connection.host}`)
    }catch(error){
        console.log(`Error:${error.message}`)
        process.exit(1)   //exit with failure
    }
}
 
module.exports= connectDB