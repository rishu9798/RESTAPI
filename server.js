import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

import  { connectUsingMongoose } from "./src/config/config.js";
import app from "./index.js";


const port = process.env.PORT;

app.listen(port,()=>{
  console.log("Server is running on port ",port)
  connectUsingMongoose();

})