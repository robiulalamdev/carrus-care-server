const express = require("express");
const { createPRTwo, getPRTwoById } = require("./prfTwo.controller");
const { isAuth } = require("../../../utils/middleware");
const router = express.Router();

router.post("/create", isAuth, createPRTwo);
router.get("/:id", isAuth, getPRTwoById);

module.exports = router;
