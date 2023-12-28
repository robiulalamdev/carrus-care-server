const express = require("express");
const { loginUser, userInfo } = require("./user.controller");
const { isAuth } = require("../../utils/middleware");
const { upload, handleMulterError } = require("../../config/multerConfig");

const router = express.Router();
router.post("/login", loginUser);
router.get("/user-info/me", isAuth, userInfo);

module.exports = router;
