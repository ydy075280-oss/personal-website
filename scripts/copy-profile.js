const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/ydy/Downloads';
const files = fs.readdirSync(srcDir);
const pngFile = files.find(f => f.endsWith('(1).png') && f.includes('陪'));

if (!pngFile) {
  console.error('Source image not found');
  process.exit(1);
}

const src = path.join(srcDir, pngFile);
const dest = 'G:/我的项目/业务mvp/personal-website/public/profile.png';

fs.copyFileSync(src, dest);
console.log('Copied:', src, '->', dest);
console.log('Size:', fs.statSync(dest).size);
