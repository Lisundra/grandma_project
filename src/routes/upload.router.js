const express = require('express');
const multer = require('multer');
const path = require('path');
const { Content } = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    const uploadPath = `${__dirname}../../uploads/image`;
    callback(null, uploadPath);
  },
  filename(req, file, callback) {
    const filename = `${Date.now()}${path.extname(file.originalname)}`;
    req.savedImagePath = `uploads/image/${filename}`;
    callback(null, filename);
  },
});

const upload = multer({ storage });

const uploadRouter = express.Router();

uploadRouter.post('/', upload.single('image'), async (req, res) => {
  console.log(req.file);
  try {
    const parent_id = req.session.userId;
    await Content.create({
      image_path: req.savedImagePath,
      parent_id,
    });

    res.json({ key: 'message' });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
module.exports = uploadRouter;
