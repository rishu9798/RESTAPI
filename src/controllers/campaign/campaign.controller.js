import CampaignModel from "../../models/campaign/campaign.model.js";
import CampignRepository from "../../models/campaign/campaign.repository.js";


export default class CampaignController{
    constructor(){
        this.campaignRepository = new CampignRepository();
    }

    async createCampaign(req,res,next){
        try{
            const {name,chanel,status,audienceSegment,scheduledTime}= req.body;
            //const campaignData = new CampaignModel(name,chanel,status,audienceSegment,scheduledTime);
            const userID = req.userID;
            const newCampaign = await this.campaignRepository.createCampaign({
                name,
                chanel,
                status,
                audienceSegment,
                scheduledTime,
             createdBy: userID});
            //const newCampaign = await this.campaignRepository.createCampaign(campaignData);
            return res.status(201).json(newCampaign);

        }
        catch(err){
            next(err);
        }
    }
}
