const express = require("express");
const {
  createPicture,
  getPictures,
  getPicturesByMessage,
  deletePicture,
} = require("../controllers/pictureController");

const router = express.Router();

router.get("/", getPictures);

router.get("/:id", getPicturesByMessage);

router.post("/", createPicture);

router.delete("/:id", deletePicture);

module.exports = router;
