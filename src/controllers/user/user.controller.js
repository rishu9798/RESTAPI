import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../../models/user/user.model.js';
import UserRepository from '../../models/user/user.repository.js';


export default class UserController{
constructor() {
       this.userRepository = new UserRepository()
   }

    async signup(req,res,next){
        try{
           const {name,email,password,role} = req.body;
           const pwd = String(password);

           const hashedPassword = await bcrypt.hash(pwd,10);

           const user = new UserModel(name,email,hashedPassword,role);

           await this.userRepository.signUp(user);

           res.status(201).json({message:"User created successfully"});
        }
        catch(err){
            next(err);
        }
    }
async singin(req,res,next){
    try{
        const {email,password} = req.body;

         const users = await this.userRepository.singIn(email);
         if(!users){
            return res.status(404).json({message:"User not found"});
         }
         else{
            // console.log(password)
            const result = await bcrypt.compare(password,users.password);
            if(result){
                const token = jwt.sign(
                    {
                    userID:users._id,
                    email:users.email,
                    role:users.role
                },
                process.env.JWT_SECERET,
                {
                    expiresIn:'1h'
                }
            )
             return res.status(200).send(token);
        
            }
            else{
                return res.status(401).json({message:"Inavalid credentials"});
            }
         }


    }catch(err){
        next(err);
    }
}

}