const express = require("express");
const { createPROne, getPROneById } = require("./prfOne.controller");
const { isAuth } = require("../../../utils/middleware");
const { handleMulterError, upload } = require("../../../config/multerConfig");
const router = express.Router();

router.post(
  "/create",
  upload.fields([
    { name: "picture", maxCount: 1 },
    { name: "front_picture", maxCount: 1 },
    { name: "back_picture", maxCount: 1 },
  ]),
  handleMulterError,
  createPROne
);
router.get("/:id", isAuth, getPROneById);

module.exports = router;
