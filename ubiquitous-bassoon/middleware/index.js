const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const hashPassword = async (req, res, next) => {
  if ("password" in req.body) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
  }
  next();
};

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ name: decoded.name });
    if (!user || !user.tokens.includ(token)) {
      throw new Error();
    }
    req.user = user;
    req.name = decoded.name;
    req.token = token;
  } catch (error) {
    res.status(401).send({ message: "User Not Found" });
  }
  next();
};

module.exports = { hashPassword, auth };
