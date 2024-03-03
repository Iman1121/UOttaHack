const Picture = require("../models/pictureModel");
const mongoose = require("mongoose");

//get all users
const getPictures = async (req, res) => {
  const pictures = await Picture.find({}).sort({ createdAt: -1 });

  res.status(200).json(pictures);
};

//get one
const getPicturesByMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such message" });
  }
  const pictures = await User.find({ msgId: id }).sort({ createdAt: -1 });

  if (!pictures) {
    return res.status(404).json({ error: "No such pictures" });
  }

  res.status(200).json(pictures);
};

async function uploadImage(file) { // file from <input type="file"> 
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", NAME_OF_UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${YOUR_ID}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );
  const img = await res.json();
  // Post `img.secure_url` to your server and save to MongoDB
}

//create user
const createPicture = async (req, res) => {
  const { msgId, userId, image } = req.body;

  

  try {
    // let buffer = new Buffer(image, 'base64');
    const picture = await Picture.create({ msgId, userId, image });
    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete user
const deletePicture = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such picture" });
  }

  const picture = await Picture.findOneAndDelete({ _id: id });

  if (!picture) {
    return res.status(404).json({ error: "No such picture" });
  }

  res.status(200).json(picture);
};

module.exports = {
  createPicture,
  getPictures,
  getPicturesByMessage,
  deletePicture,
};
