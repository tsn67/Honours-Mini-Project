const express = require("express");
const router = express.Router();

const {
    refactor,
    review,
    style
} = require("../controllers/aiController");

router.post("/refactor", refactor);
router.post("/review", review);
router.post("/style", style);

module.exports = router;
