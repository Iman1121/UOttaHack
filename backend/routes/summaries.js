const express = require("express");
const {
  getSummary,
  getSummaryByLecture,
} = require("../controllers/summaryController");

const router = express.Router();

router.get("/", getSummary);

router.get("/bylecture/:id", getSummaryByLecture);

module.exports = router;
