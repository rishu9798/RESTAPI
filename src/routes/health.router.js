import express from "express";
// import { success } from "../utils/response.js";
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(201).json({success:true,message:"Api is healthy"});
});

export default router;
