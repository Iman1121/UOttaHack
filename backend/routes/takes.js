const express = require("express");
const Takes = require("../models/takesModel");
const {
  createTakes,
  getTakes,
  getAllTakes,
  updateTakes,
  deleteTakes,
  getTakesByLecture,
} = require("../controllers/takesController");

const router = express.Router();

router.get("/", getAllTakes);

router.get("/:id", getTakes);

router.post("/", createTakes);

router.delete("/:id", deleteTakes);

router.patch("/:id", updateTakes);

router.get("/bylecture/:id", getTakesByLecture);

module.exports = router;
