import { User } from "../Models/user.js";

export const register = async (req, res) => {
  const user = new User(req.body);
  const newUser = await user.save();
  res.status(201).json({ message: "user created" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ username });
};
