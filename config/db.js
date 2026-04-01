import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://shahdhruvil125_db_user:VXurOWkWLisFXnve@cluster0.v6dnksf.mongodb.net/Expence")
    .then(()=>console.log("DB CONNECTED"));
}