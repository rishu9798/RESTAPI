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
}