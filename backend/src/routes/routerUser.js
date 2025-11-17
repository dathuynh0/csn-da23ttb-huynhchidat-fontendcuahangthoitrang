import express from "express";
import {
  deleteUser,
  generateUser,
  getUser,
  updateUser,
} from "../controller/controllerUser.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", generateUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
