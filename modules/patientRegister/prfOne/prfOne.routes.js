const express = require("express");
const { createPROne, getPROneById } = require("./prfOne.controller");
const { isAuth } = require("../../../utils/middleware");
const router = express.Router();

router.post("/create", isAuth, createPROne);
router.get("/:id", isAuth, getPROneById);

module.exports = router;
