const fs = require("fs");
const path = require("path");

const baseDir = __dirname;
const outputFile = path.join(baseDir, "script.js");

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const dayDirs = fs
  .readdirSync(baseDir)
  .filter(
    (f) =>
      fs.statSync(path.join(baseDir, f)).isDirectory() && /^day\d+$/i.test(f)
  );

const flashcards = {};

dayDirs.forEach((dayFolder) => {
  const dayNumber = dayFolder.match(/\d+/)[0];
  const files = fs
    .readdirSync(path.join(baseDir, dayFolder))
    .filter((file) => /\.(png|jpg|jpeg|gif|svg)$/i.test(file));

  flashcards[dayNumber] = files.map((file) => {
    const baseName = path.basename(file, path.extname(file));
    return {
      word: capitalize(baseName),
      img: `${dayFolder}/${file}`,
    };
  });
});

const arrayString =
  "const flashcards = " + JSON.stringify(flashcards, null, 2) + "\n\n";

let scriptContent = fs.readFileSync(outputFile, "utf-8");

scriptContent = scriptContent.replace(/const flashcards =[\s\S]*?\n\n/, "");

scriptContent = arrayString + scriptContent;

fs.writeFileSync(outputFile, scriptContent, "utf-8");

console.log("✅ Flashcards object atualizado em script.js");
