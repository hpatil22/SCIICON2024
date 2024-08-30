const fs = require('fs');
const path = require('path');

// Directory containing the images
const imagesDir = path.join(__dirname, 'public/ALL SCIICON IMAGES USECASE2');

// Function to get all image files in a directory
function getImageFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file)).map(file => ({
    path: path.join(dir, file),
    name: file
  }));
}

const imageFiles = getImageFiles(imagesDir);

// Write JSON to file
fs.writeFileSync('public/imageData.json', JSON.stringify(imageFiles, null, 2));

console.log('Image list generated.');
