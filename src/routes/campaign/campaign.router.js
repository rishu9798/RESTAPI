import express from 'express';
import CampaignController from '../../controllers/campaign/campaign.controller.js';

const campaignControler = new CampaignController();

const router = express.Router();

router.post('/',(req,res,next)=>{
    campaignControler.createCampaign(req,res,next)
});
router.get('/',(req,res,next)=>{
    campaignControler.getAllCampaign(req,res,next)
});
router.get('/:id',(req,res)=> campaignControler.getOneCampaign(req,res));





export default router;