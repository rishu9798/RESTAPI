import mongoose from "mongoose";
import config from "./src/config/config.js";
import app from "./index.js";

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    //process.exit(1);
  });
