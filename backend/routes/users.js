const express = require("express");
const User = require("../models/userModel");
const {
  createUser,
  getUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete" });
});

// router.update("/:id", (res, req) => {
//   res.json({ mssg: "update" });
// });

module.exports = router;
