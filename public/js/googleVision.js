const fs = require('fs');
const { ImageAnnotatorClient } = require('@google-cloud/vision');

const visionClient = new ImageAnnotatorClient({
  keyFilename: './public/image/clean-fin-421214-996478b047ba.json',
});

async function recognizeText(imagePath) {
  try {
    const image = await fs.promises.readFile(imagePath);

    const [result] = await visionClient.textDetection(image);
    const detections = result.textAnnotations;

    console.log(detections[0].description);
    // detections.forEach(text => console.log(text.description));
  } catch (err) {
    console.error('Ошибка:', err);
  }
}

// recognizeText('./public/image/e3344ba6-8955-4cac-acb0-94cffca0e310.jpg');
// recognizeText('./public/image/61df2daf-0553-4907-a5b2-ba8478c8cd07.jpg');
// recognizeText('./public/image/97b6d5f8-98f1-4748-81eb-85d00751b8d2.jpg');
