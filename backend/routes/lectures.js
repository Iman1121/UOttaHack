const express = require("express");
const {
  getLecture,
  getLectures,
  getLecturesByCourse,
  createLecture,
  deleteLecture,
  updateLecture,
} = require("../controllers/lectureController");

const router = express.Router();

router.get("/", getLectures);

router.get("/byCourse/:id", getLecturesByCourse);

router.post("/", createLecture);

router.delete("/:id", deleteLecture);

router.patch("/:id", updateLecture);

module.exports = router;
