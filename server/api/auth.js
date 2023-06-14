import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

import { v4 } from "uuid";
const uuid = v4;

import { User } from "../db/database.js";
import verifyToken from "./token.js";

const hasRequiredSignup = (req) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!lastname || lastname.length < 1) {
      return false;
    }
    if (!firstname || firstname.length < 1) {
      return false;
    }
    if (!email || email.length < 1) {
      return false;
    }
    if (!password || password.length < 1) {
      return false;
    }
  } catch (error) {
    return false;
  }
  return true;
};

router.post("/signup", async (req, res) => {
  if (!hasRequiredSignup(req)) {
    res.status(400).json({
      message: "missing required fields",
    });
    return;
  }

  const { firstname, lastname, email, password } = req.body;

  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    res.status(400).json({
      message: "user already exists",
    });
    return;
  }

  var salt = await bcrypt.genSalt(10);
  var savedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    userid: uuid(),
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: savedPassword,
    usertype: "candidate",
  });

  newUser
    .save()
    .then((saved) => {
      res.status(200).json({
        message: "user created",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "error creating user",
      });
    });
});

router.post("/login", verifyToken, async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({
        message: "missing required fields",
      });
      return;
    }
  } catch (error) {
    res.status(400).json({
      message: "missing required fields",
    });
    return;
  }

  const { email, password } = req.body;

  let existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    res.status(400).json({
      message: "invalid credentials",
    });
    return;
  }

  const match = await bcrypt.compare(password, existingUser.password);

  if (!match) {
    res.status(400).json({
      message: "invalid credentials",
    });
    return;
  }

  const token = jwt.sign(
    {
      userid: existingUser.userid,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: true,
  });

  res.status(200).json({
    message: "login successful",
  });
});

router.get("/logout", verifyToken, (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "logout successful",
  });
});

router.get("/refresh-token", verifyToken, (req, res) => {
  const token = jwt.sign(
    {
      userid: req.user.userid,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: true,
  });

  res.status(200).json({
    message: "token refreshed",
  });
});

export default router;
