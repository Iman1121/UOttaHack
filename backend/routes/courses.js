const express = require("express");
const {
  createCourse,
  getCourses,
  getCourseByCourseCode,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const router = express.Router();

router.get("/", getCourses);

router.get("/:id", getCourseByCourseCode);

router.post("/", createCourse);

router.delete("/:id", deleteCourse);

router.patch("/:id", updateCourse);

module.exports = router;
