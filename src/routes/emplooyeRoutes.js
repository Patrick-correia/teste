import express from "express";
import emplooyeControllers from "../controllers/emplooyeControllers.js";

const router = express.Router();

router.post("/", emplooyeControllers.login);

export default router;