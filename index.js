import express from "express";
import cors from "cors";
import mongoose  from "mongoose";
// import config from "./config/config.js";
// import logger from "./src/middlewares/logger.js";

import errorHandler from './src/middlewares/errorHandler.js';
import router from "./src/routes/health.router.js";
import userRouter from "./src/routes/user/user.router.js";
import adminRouter from "./src/routes/admin/admin.router.js";
import campaignRouter from "./src/routes/campaign/campaign.router.js";
import { jwtAuth } from "./src/middlewares/jwt.middleware.js";
import { authAdmin } from "./src/middlewares/admin.middleware.js";
import { loggerMiddleware } from "./src/middlewares/logger.js";
import { errorLogger } from "./src/middlewares/logger.js";


// import router from "./src/routes/health.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/api/health", router);
app.use("/api/user",userRouter);
app.use('/api/auth/me',jwtAuth,authAdmin,adminRouter);
app.use('/api/campaigns',jwtAuth,campaignRouter)

// Global Error Handler
app.use((err,req,res,next)=>{
    console.log(err);
     if(err instanceof mongoose.Error.ValidationError){
        return res.status(400).send(err.message);
      }
    if(err instanceof errorHandler){
        res.status(err.code).send(err.message);
    }

    res.status(503).send("Something went wrong ! please try againg later")
});

app.use(errorLogger);
export default app;
