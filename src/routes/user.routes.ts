import express from "express";
import * as userController from "@controllers/user.controller";

const router = express.Router();

router.route("/").post(userController.createUser);

export default router;
