const express = require("express");
const { createPrfThree, getPrfThreeById } = require("./prfThree.controller");
const { isAuth } = require("../../../utils/middleware");
const router = express.Router();

router.post("/create", isAuth, createPrfThree);
router.get("/:id", isAuth, getPrfThreeById);

module.exports = router;
