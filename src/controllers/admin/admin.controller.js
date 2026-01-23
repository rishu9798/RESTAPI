//  import CampignRepository from "../../models/campaign/campaign.repository.js";
 import UserRepository from "../../models/user/user.repository.js";

export default class AdminController{
  constructor(){
    this.userRepository = new UserRepository();
    // this.campaignRepository= new CampignRepository();

  }
    async getAllUsers(req,res,next){
        try{
           const users = await this.userRepository.getUserDetails(req.userID);
           res.status(200).json(users);

        }
        catch(err){
            next(err);
        }
    }
    
}