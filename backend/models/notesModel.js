const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema(
  {
    lecId: {
      type: String,
      required: true,
    },
    msgId: {
      type: Number,
      required: true,
    },
    response: {
      type: String,
      default: "",
    },
    pictureURI: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notes", notesSchema);
