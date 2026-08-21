import fs from 'fs';
import path from 'path';

const downloads = 'C:/Users/ydy/Downloads';
const files = fs.readdirSync(downloads);

// 找文件大小约为 3.4MB 的 png
const target = files.find(f => {
  if (!f.endsWith('.png')) return false;
  const stat = fs.statSync(path.join(downloads, f));
  return stat.size > 3000000 && stat.size < 4000000;
});

if (!target) {
  console.error('Target file not found');
  process.exit(1);
}

console.log('Found:', target);
const src = path.join(downloads, target);
const dest = 'G:/我的项目/业务mvp/personal-website/public/profile.png';
fs.copyFileSync(src, dest);
console.log('Copied. Size:', fs.statSync(dest).size);
