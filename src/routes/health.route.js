import express from "express";
import { success } from "../utils/response.js";
const router = express.Router();

router.get("/", (req, res) => {
  return success(res, "Server is healthy", { status: "UP" });
});

export default router;
