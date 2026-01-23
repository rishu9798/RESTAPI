import express from 'express';
import CampaignController from '../../controllers/campaign/campaign.controller.js';
import { authAdmin } from '../../middlewares/admin.middleware.js';

const campaignControler = new CampaignController();

const router = express.Router();

router.post('/',(req,res,next)=>{
    campaignControler.createCampaign(req,res,next)
});
router.get('/',(req,res,next)=>{
    campaignControler.getAllCampaign(req,res,next)
});
router.get('/:id',(req,res)=> campaignControler.getOneCampaign(req,res));

router.put('/:id',(req,res,next)=>{
    campaignControler.updateProduct(req,res,next)
});

router.delete('/:id',authAdmin,(req,res,next)=>{
    campaignControler.deleteCampaign(req,res,next)
});



export default router;