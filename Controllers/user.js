import { User } from "../Models/user.js";
import bcrypt from "bcrypt";
import {
  userLoginValidator,
  userRegistrationValidator,
} from "../Vallidators/user-validators.js";

export const registerUser = async (req, res) => {
  //Validate user information
  const { error, value } = userRegistrationValidator.validate(req.body);
  if (error) {
    res.status(400).json(error);
  }
  //Check if user does not exist already
  const existingUser = await User.findOne({ email: value.email });
  if (existingUser) {
    res.status(409).json({ message: "User already exist" });
  }
  //hash plain text password
  const hashedPassword = await bcrypt.hash(value.password, 10);
  //Create user record in database
  const newUser = await User.create({
    ...value,
    password: hashedPassword,
  });
  //Return Response
  res.status(200).json("user registered successfully");
};

export const loginUser = async (req, res) => {
  //validate user information
  const { error, value } = userLoginValidator.validate(req.body);
  if (error) {
    return res.status(422).json({ error });
  }
  //Find matching user record in database
  const existingUser = await User.findOne({ email: value.email });
  if (!existingUser) {
    res.status(401).json({ message: "wrong credentials" });
  }
  //Compare income password with saved password
  const conparePassword = await bcrypt.compare(
    value.password,
    existingUser.password
  );
  if (!conparePassword) {
    res.status(401).json({ message: "wrong credentials" });
  }
  //Generate access token

  //Return response
  res.status(201).json("login successful");
};
