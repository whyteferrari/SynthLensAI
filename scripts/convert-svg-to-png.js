const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convert() {
  const svgPath = path.join(__dirname, '..', 'assets', 'architecture.svg');
  const outPath = path.join(__dirname, '..', 'assets', 'architecture@2x.png');

  if (!fs.existsSync(svgPath)) {
    console.error('SVG file not found:', svgPath);
    process.exit(2);
  }

  try {
    await sharp(svgPath)
      .resize({ width: 1600 })
      .png({ quality: 90 })
      .toFile(outPath);
    console.log('Wrote PNG:', outPath);
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
}

convert();
