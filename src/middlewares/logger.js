import fs from 'fs';
import winston from 'winston';

const logger= winston.createLogger({
    level:'info',
    format:winston.format.json(),
    defaultMeta:{service:'request-logging'},
    transports:[
        new winston.transports.File({filename:"logs.txt"})
    ]
})
export const loggerMiddleware = async(req,res,next)=>{
     const safeBody = { ...req.body };

    // Remove or mask sensitive fields
    if (safeBody.password) safeBody.password = "***";
    if (safeBody.email) safeBody.email = "***";
    if (safeBody.token) safeBody.token = "***";

    if(!req.url.includes('signin')&& !req.url.includes('signup')){
    //const logdata = `${req.url} - ${JSON.stringify(safeBody)}`;
    logger.info({
      message: "Incoming request",
      url: req.url,
      method: req.method,
      body: safeBody,
    });
}
    next()
}

// Error Logger Middleware
// ---------------------
export const errorLogger = (err, req, res, next) => {

  logger.error({
    message: err.message,
    url: req.url,
    stack: err.stack,
    code: err.code || 500,
  });

  // Prepare error response
  res.status(err.code || 500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};