import User from "../models/User.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const users = await User.find().sort();

    res.status(200).json(users);
  } catch (error) {
    console.log("Loi khi goi getUser");
    res.status(500).json({ message: "Loi he thong" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User khong ton tai" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Loi khi goi getUser");
    res.status(500).json({ message: "Loi he thong" });
  }
};

export const generateUser = async (req, res) => {
  try {
    const { name, userName, password, auth } = req.body;

    //tao user
    await User.create({
      name,
      userName,
      password,
      auth,
    });

    res.sendStatus(201);
  } catch (error) {
    console.log("Loi khi goi generateUser");
    res.status(500).json({ message: "Loi he thong" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, userName, password, auth } = req.body;

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        userName,
        password,
        auth,
      },
      {
        new: true,
      }
    );

    if (!updateUser) {
      res.status(404).json({ message: "User khong ton tai" });
    }

    res.status(200).json(updateUser);
  } catch (error) {
    console.log("Loi khi goi updateUser");
    res.status(500).json({ message: "Loi he thong" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      res.status(404).json({ message: "User khong ton tai" });
    }

    res.status(200).json(deleteUser);
  } catch (error) {
    console.log("Loi khi goi deleteUser");
    res.status(500).json({ message: "Loi he thong" });
  }
};
