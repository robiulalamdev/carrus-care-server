const express = require("express");
const {
  loginUser,
  userInfo,
  getUser,
  deleteUser,
  getAllUsers,
  updateUser,
  updateUserInfo,
  createUser,
  emailVerification,
  registerUser,
  forgetPassword,
  changePassword,
} = require("./user.controller");
const { isAuth } = require("../../utils/middleware");

const router = express.Router();
router.post("/login", loginUser);
router.get("/user-info/me", isAuth, userInfo);

router.post("/signup", registerUser);
router.post("/verifyEmail", emailVerification);
router.post("/login", loginUser);
router.post("/create-admin", createUser);
router.patch("/:id", isAuth, updateUserInfo);
router.patch("/:id", updateUser);
router.get("/", getAllUsers);
router.delete("/delete/:id", deleteUser);
router.get("/:id", getUser);
router.post("/forgot-password", forgetPassword);
router.post("/change-password", isAuth, changePassword);

module.exports = router;
