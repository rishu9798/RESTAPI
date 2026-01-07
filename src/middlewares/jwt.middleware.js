import jwt from 'jsonwebtoken';

 export const jwtAuth  = (req,res,next)=>{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).send("Access Denied. no token received");
    }
    else{
        try{
            const payload=  jwt.verify(
            token,
            process.env.JWT_SECERET
        );
        req.userID = payload.userID;
        req.role = payload.role;

        //console.log(payload);

        }catch(err){
           return res.status(401).send("Invalid Token");
        }
      next();
    }

 }