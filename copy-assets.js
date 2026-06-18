const fs = require('fs');
const path = require('path');

const srcLogo = 'C:\\Users\\rashid\\.gemini\\antigravity-ide\\brain\\89cde07b-d6a6-42fc-8786-67932e6b19d0\\media__1781258726012.png';
const srcHero = 'C:\\Users\\rashid\\.gemini\\antigravity-ide\\brain\\89cde07b-d6a6-42fc-8786-67932e6b19d0\\bosco_bags_collection_1781258895699.png';

const destLogo = 'd:\\Bosco-Bags\\assets\\logo.png';
const destHero = 'd:\\Bosco-Bags\\assets\\hero_bags.png';

try {
  // Ensure assets dir exists
  const assetsDir = 'd:\\Bosco-Bags\\assets';
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // Copy logo
  if (fs.existsSync(srcLogo)) {
    fs.copyFileSync(srcLogo, destLogo);
    console.log('Successfully copied logo.png');
  } else {
    console.error('Source logo file not found at:', srcLogo);
  }

  // Copy hero image
  if (fs.existsSync(srcHero)) {
    fs.copyFileSync(srcHero, destHero);
    console.log('Successfully copied hero_bags.png');
  } else {
    console.error('Source hero image not found at:', srcHero);
  }

} catch (err) {
  console.error('Error copying files:', err);
}
