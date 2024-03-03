const express = require("express");
const {
  getNotes,
  createNote,
  getNotesByLecture,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);

router.get("/bylecture/:id", getNotesByLecture);

module.exports = router;
