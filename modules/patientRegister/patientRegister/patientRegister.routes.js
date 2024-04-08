const express = require("express");
const { isAuth } = require("../../../utils/middleware");
const {
  getMyRegisters,
  getMyRegister,
} = require("./patientRegister.controller");
const router = express.Router();

router.get("/", isAuth, getMyRegisters);
router.get("/my-register/:id", getMyRegister);

module.exports = router;
