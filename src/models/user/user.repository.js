import mongoose from "mongoose";
import { UserSchema } from "./user.schema.js";



const userModel = mongoose.model("user",UserSchema);


export default class UserRepository{
    async signUp(user){
        try{
         const  newUser = new userModel(user);
         await newUser.save();
         return newUser;
        }catch(err){
            if(err instanceof mongoose.Error.ValidationError){
                throw err
            }
            else{
            console.error("Signup error:", err); 
            }//
        }
     }
     async singIn(email,password){
        try{
            return await userModel.findOne({email});


        } catch(err){
             if(err instanceof mongoose.Error.ValidationError){
                throw err
            }
            else{
            console.error("Signup error:", err); 
            }//
        }
     }

     async getUserDetails(userID){
         try{
            return await userModel.find({});


        } catch(err){
             if(err instanceof mongoose.Error.ValidationError){
                throw err
            }
            else{
            console.error("Signup error:", err); 
            }//
        }
     }
    }
