const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "works" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "id" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "Post" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete" });
});

// router.update("/:id", (res, req) => {
//   res.json({ mssg: "update" });
// });

module.exports = router;
