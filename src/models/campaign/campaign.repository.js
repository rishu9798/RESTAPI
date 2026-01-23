import mongoose  from "mongoose";
import { campaignSchema } from "./campaign.schema.js";

const campaignModel = mongoose.model('Campaign',campaignSchema);

export default class CampignRepository{
    async createCampaign(campaign){
        try{
            const newCampaign = new campaignModel(campaign);
            await newCampaign.save();
            return newCampaign;
            
        }
        catch(err){
            if(err instanceof mongoose.Error.ValidationError){
                throw err;
            }
        }

    }

    async getCampign(userID){
        try {
            return await campaignModel.find({createdBy:userID});
            
        } catch (err) {
             if(err instanceof mongoose.Error.ValidationError){
                throw err
             }
        }

    }

    async getOnecampaign(id,userID){
        try {

             if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid campaign ID");
                }
            //  console.log("user id via repo of camp ",userID)
            //  console.log(id)
            //  console.log()
            return await campaignModel.findOne({
               _id:id,
                createdBy:userID

            })

            
        } catch (err) {
            if(err instanceof mongoose.Error.ValidationError){
                throw err 

            }
            
        }
    }
    async updateProduct(id,userID,updatedData){
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid campaign ID");
                }
            return await campaignModel.findOneAndUpdate(
                {_id:id,
                 createdBy:userID
                },
                updatedData,
                {new:true,runValidators:true}
            )
            
        } catch (err) {
            if(err instanceof mongoose.Error.ValidationError){
                throw err
            }
        }
    }
    async deleteOne(id){
         
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid campaign ID");
                }

                return await campaignModel.findOneAndDelete(
                    {    
                        _id:id,
                        
                    }


                )
       

            
        } 
        catch (err) {
             if(err instanceof mongoose.Error.ValidationError){
                throw err
             }
        }
    }

}