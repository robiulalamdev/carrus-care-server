const express = require("express");
const { isAuth } = require("../../../utils/middleware");
const { getMyRegisters } = require("./patientRegister.controller");
const router = express.Router();

router.get("/", isAuth, getMyRegisters);

module.exports = router;
