import express from "express";
import {
  deleteUser,
  generateUser,
  getUser,
  getUserById,
  updateUser,
} from "../controller/controllerUser.js";

const router = express.Router();

router.get("/", getUser);

router.get("/:id", getUserById);

router.post("/", generateUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
