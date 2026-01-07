import express from 'express';
import CampaignController from '../../controllers/campaign/campaign.controller.js';

const campaignControler = new CampaignController();

const router = express.Router();

router.post('/',(req,res,next)=>{
    campaignControler.createCampaign(req,res,next)
});






export default router;