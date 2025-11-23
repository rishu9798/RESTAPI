import express from "express";
import cors from "cors";
// import config from "./config/config.js";
import logger from "./src/middlewares/logger.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

import router from "./src/routes/health.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/health", router);

// Global Error Handler
app.use(errorHandler);

export default app;
