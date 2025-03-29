import fs from 'fs';
import path from 'path';

const filesToCopy = ['config.xml', '.project', '.tproject'];
const from = path.resolve('scripts/tizen');
const to = path.resolve('dist/tizen');

if (!fs.existsSync(to)) {
  fs.mkdirSync(to, { recursive: true });
}

filesToCopy.forEach((file) => {
  fs.copyFileSync(path.join(from, file), path.join(to, file));
  console.log(`Copied ${file}`);
});
