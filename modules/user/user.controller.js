const User = require("./user.model");
const bcrcypt = require("bcryptjs");
const randomstring = require("randomstring");
const { generateToken, sendVerificationCode } = require("../../utils/auth");
const PatientRegister = require("../patientRegister/patientRegister.model");

const loginUser = async (req, res) => {
  try {
    if (req.body?.email === process.env.ADMIN_MAIL) {
      const accessToken = await generateToken({
        email: process.env.ADMIN_MAIL,
        role: "Admin",
      });
      return res.send({
        success: true,
        message: "Logged in successfully",
        status: 200,
        accessToken,
      });
    } else {
      const user = await PatientRegister.findOne({
        email: req.body.email,
      }).select("email");
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
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const userInfo = async (req, res) => {
  try {
    if (req.user?.email === process.env.ADMIN_MAIL) {
      res.status(200).send({
        success: true,
        message: "User Get Success",
        user: { email: process.env.ADMIN_MAIL, role: "Admin" },
      });
    } else {
      const user = await PatientRegister.findOne({
        email: req.user?.email,
      }).select("email");
      if (!user) {
        return res.status(401).send({
          success: false,
          type: "email",
          message: "User not found",
        });
      }
      if (user) {
        res.status(200).send({
          success: true,
          message: "User Get Success",
          user: { email: user?.email, role: "User" },
        });
      }
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
