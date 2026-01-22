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
            return res.status(201).json({message:"Campaign created succsessfully"});

        }
        catch(err){
            next(err);
        }
    }
    async getAllCampaign(req,res,next){
        // console.log(req.userID,"from getALl")
        try {
            const CampaignDetail = await this.campaignRepository.getCampign(req.userID);

            res.status(200).json({CampaignDetail});
            
        } catch (err) {
            next(err)
        }
   }
   async getOneCampaign(req,res){
    console.log(req.userID)
    try {
        const userID = req.userID;
        const campaignId = req.params.id
        const campaignOne = await this.campaignRepository.getOnecampaign(campaignId,userID);
        if(!campaignOne){
          return  res.status(401).send("inavlid Campaign id");
        
        }
        console.log("user id ",userID)
        return res.status(200).json({campaignOne})
    } catch (err) {
        // next(err)

        console.log(err)
    }
   }
   
}
