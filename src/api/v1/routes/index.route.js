const express = require("express");
const router = express.Router();

router.get("/health-check", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api OK",
  });
});

module.exports = router;
