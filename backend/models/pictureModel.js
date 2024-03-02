const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pictureSchema = new Schema(
  {
    msgId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    image: {
      type: Buffer,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Picture", pictureSchema);
