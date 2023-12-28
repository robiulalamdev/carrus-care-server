const express = require("express");
const {
  createPatientRegister,
  getMyPatientRegisters,
} = require("./patientRegister.controller");
const { isAuth } = require("../../utils/middleware");
const router = express.Router();

router.post("/create", isAuth, createPatientRegister);
router.get("/", isAuth, getMyPatientRegisters);

module.exports = router;
