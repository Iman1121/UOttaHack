const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "works" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "id" });
});

router.post("/", async (req, res) => {
  const { email, name, isStudent, isProf } = req.body;

  try {
    const user = await User.create({ email, name, isStudent, isProf });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: "Post" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete" });
});

// router.update("/:id", (res, req) => {
//   res.json({ mssg: "update" });
// });

module.exports = router;
