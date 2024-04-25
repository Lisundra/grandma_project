const fs = require('fs');
const express = require('express');
const multer = require('multer');
const path = require('path');
const { ImageAnnotatorClient } = require('@google-cloud/vision');
const { Content } = require('../../db/models');

const visionClient = new ImageAnnotatorClient({
  keyFilename: './sessions/clean-fin-421214-996478b047ba.json',
});

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
  // console.log(req.file);
  try {
    const parent_id = req.session.userId;

    const imagePath = path.join('src', req.savedImagePath);
    const image = await fs.promises.readFile(imagePath);
    const [result] = await visionClient.textDetection(image);
    const textResult = result.textAnnotations[0].description;

    const content = await Content.create({
      image_path: req.savedImagePath,
      text: textResult,
      parent_id,
    });

    // console.log(content.get({ plain: true }));

    if (content) {
      res.json(content);
    } else {
      res.status(400).send('Failed to create content');
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
module.exports = uploadRouter;
