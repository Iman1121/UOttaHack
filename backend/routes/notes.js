const express = require("express");
const {
  getNotes,
  getNotesByLecture,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/", getNotes);

router.get("/bylecture/:id", getNotesByLecture);

module.exports = router;
