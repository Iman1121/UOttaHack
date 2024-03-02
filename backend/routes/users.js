const express = require("express");
const User = require("../models/userModel");
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
