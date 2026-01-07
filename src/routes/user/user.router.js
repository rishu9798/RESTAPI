import express from 'express';
const router = express.Router();
import UserController from '../../controllers/user/user.controller.js';

const userController = new UserController();

router.post('/signup',(req,res,next)=>{
    userController.signup(req,res,next)
})
router.post('/signin',(req,res,next)=>{
    userController.singin(req,res,next)
})




export default router;