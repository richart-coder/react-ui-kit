import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

function getAllImageFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  let results: string[] = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath)); // 遞迴搜尋子資料夾
    } else if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(filePath)) {
      results.push(filePath);
    }
  }
  return results;
}

async function generatePlaceholders() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const publicDir = path.join(__dirname, "../public");
  const imageFiles = getAllImageFiles(publicDir);
  const placeholders = {};

  for (const imagePath of imageFiles) {
    const buffer = await sharp(imagePath)
      .resize(40, 40)
      .webp({ quality: 25 })
      .toBuffer();

    const base64 = `data:image/jpeg;base64,${buffer.toString("base64")}`;
    const relativePath = path.relative(publicDir, imagePath);
    placeholders[`/${relativePath}`] = base64;
  }
  const outputDir = path.join(__dirname, "../src/data");
  const outputFile = path.join(outputDir, "placeholders.json");
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(placeholders, null, 2));
}

generatePlaceholders();
