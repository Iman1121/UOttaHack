const express = require("express");
const Message = require("../models/messageModel");
const {
  createMessage,
  getMessage,
  getAllMessage,
  updateMessage,
  deleteMessage,
  getMessagesByLecture,
} = require("../controllers/messageController");

const router = express.Router();

router.get("/", getAllMessage);

router.get("/:id", getMessage);

router.post("/", createMessage);

router.delete("/:id", deleteMessage);

router.patch("/:id", updateMessage);

router.get("/bylecture/:id", getMessagesByLecture);

module.exports = router;
