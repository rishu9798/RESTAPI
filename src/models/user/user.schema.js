import mongoose from "mongoose";

 export const UserSchema= new mongoose.Schema({
    name:{type:String,
      maxLength:[24,"name can't be greater than 25 char"],
      required:true,
     
      
    },
    email:{type:String,unique:true,required:true,match:[/.+\@.+\../,"please enter a valid email"]},
    password:{type:String,required:true
      // validate:{
      //    validator: function (value){
      //       return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)

      //    },
      //    message:"password should be between 8-12 characters "
      
    },
    role:{type:String,
      required:true,
      enum:['user', 'admin'],
      default:'user' 

    },

    createdAt:{type:Date,
        default:Date.now
    }

 })