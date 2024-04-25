const express = require('express');
const multer = require('multer');
const path = require('path');
// +++ GOOGLE VISION
const fs = require('fs');
const { ImageAnnotatorClient } = require('@google-cloud/vision');
// --- GOOGLE VISION

const { Content } = require('../../db/models');

// +++ GOOGLE VISION
const visionClient = new ImageAnnotatorClient({
  keyFilename: './sessions/clean-fin-421214-996478b047ba.json',
});
// --- GOOGLE VISION

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
  // console.log(req.savedImagePath);
  try {
    const parent_id = req.session.userId;

    // +++ GOOGLE VISION
    const imagePath = path.join('src', req.savedImagePath);
    const image = await fs.promises.readFile(imagePath);
    const [result] = await visionClient.textDetection(image);
    const text = result.textAnnotations[0].description;
    // --- GOOGLE VISION

    await Content.create({
      image_path: req.savedImagePath,
      text,
      parent_id,
    });

    res.json({ key: 'message' });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
module.exports = uploadRouter;
