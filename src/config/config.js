import mongoose  from "mongoose";
import dotenv from "dotenv";
import errorHandler from "../middlewares/errorHandler.js";
dotenv.config();

const url = process.env.DB_URL ;

export const  connectUsingMongoose = async ()=>{
  try{
    await mongoose.connect(url);
    console.log("connected using mongoose");
  }
    catch(err){
      throw new errorHandler("Error in connection database ",500);
    
  }
}