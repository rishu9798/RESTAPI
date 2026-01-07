import mongoose from "mongoose";

export const campaignSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
        
    },
    chanel:{
        type:String,
        enum:['rcs','sms,email'],
        required:true
    
    },
    status:{
        type:String,
        enum:['active','scheduled','paused'],
        required:true,
        default:'scheduled'
    },
    audienceSegment:{
        type:String,
        required:true
    },
    scheduledTime:{
        type:Date,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
//xport const CampaignModel = mongoose.model('Capmaign',campaignSchema);

