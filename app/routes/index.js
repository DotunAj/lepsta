import { Router } from "express";
import helloController from "../controllers/helloController";
import authController from "../controllers/authController";

const router = Router();

router.get("/hello", helloController.index);

router.get("/lepsta", helloController.lepsta);

router.get("/login", authController.login);

export default router;
