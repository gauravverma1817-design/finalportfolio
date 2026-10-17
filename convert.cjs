const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'public', 'frames');

async function convert() {
  const files = fs.readdirSync(framesDir);
  const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png')).sort();
  console.log(`Found ${pngFiles.length} PNG files. Converting to WebP...`);

  let count = 0;
  for (const file of pngFiles) {
    const input = path.join(framesDir, file);
    const output = path.join(framesDir, file.replace(/\.png$/i, '.webp'));

    await sharp(input)
      .resize({ width: 1280 })
      .webp({ quality: 75 })
      .toFile(output);

    count++;
    if (count % 30 === 0 || count === pngFiles.length) {
      console.log(`Converted ${count} / ${pngFiles.length} frames...`);
    }
  }
  console.log("SUCCESS! All frames converted to .webp.");
}

convert().catch(console.error);
