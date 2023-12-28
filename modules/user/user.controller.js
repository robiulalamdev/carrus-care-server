const User = require("./user.model");
const bcrcypt = require("bcryptjs");
const randomstring = require("randomstring");
const { generateToken, sendVerificationCode } = require("../../utils/auth");
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({
        success: false,
        type: "email",
        message: "User not found",
      });
    }
    if (user) {
      const accessToken = await generateToken(user);
      return res.send({
        success: true,
        message: "Logged in successfully",
        status: 200,
        user,
        accessToken,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const userInfo = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user?.email });
    if (!user) {
      return res.status(401).send({
        success: false,
        type: "email",
        message: "User not found",
      });
    }
    if (user) {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  loginUser,
  userInfo,
};
