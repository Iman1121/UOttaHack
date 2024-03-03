const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    lecId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    pictureURI: {
      type: String,
      default: false,
    },
    isNote: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
