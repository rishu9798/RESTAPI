import express from 'express';
import AdminController from '../../controllers/admin/admin.controller.js';




const router = express.Router();
const adminController = new AdminController();

router.get('/',(req,res,next)=>{
     adminController.getAllUsers(req,res,next)
});


export default router;