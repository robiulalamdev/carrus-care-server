const express = require("express");
const {
  createPatientRegister,
  getMyPatientRegisters,
  getPatientRegisterById,
} = require("./patientRegister.controller");
const { isAuth } = require("../../utils/middleware");
const router = express.Router();

router.post("/create", isAuth, createPatientRegister);
router.get("/", isAuth, getMyPatientRegisters);
router.get("/:id", isAuth, getPatientRegisterById);

module.exports = router;
