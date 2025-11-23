import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  env: process.env.NODE_ENV || "development",
};
