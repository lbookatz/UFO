const { Router } = require("express");
const userRouter = Router();
const User = require("../models/user");
const { hashPassword, auth } = require("../middleware");
const jwt = require("jsonwebtoken");

userRouter.post("/register", hashPassword, async (req, res) => {
  try {
    const token = jwt.sign({ name: req.body.name }, process.env.SECRET)
    console.log(req.body);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token: token,
    });
    console.log(user);
    // res.status(200).send(user,token);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

userRouter.get("/", auth, async (req, res) => {
  try {
      res.status(200).send(req.user);
    } catch (error) {
    res.status(500).send(error);
  }});

module.exports = userRouter;

