// this is just a helper tool

const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "assets");
const outputFile = path.join(__dirname, "script.js");

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const files = fs
  .readdirSync(assetsDir)
  .filter((file) => /\.(png|jpg|jpeg|gif|svg)$/i.test(file));

const flashcards = files.map((file) => {
  const baseName = path.basename(file, path.extname(file));
  return {
    word: capitalize(baseName),
    img: `assets/${file}`,
  };
});

const arrayString =
  "const flashcards = " + JSON.stringify(flashcards, null, 2) + "\n\n";

let scriptContent = fs.readFileSync(outputFile, "utf-8");

scriptContent = scriptContent.replace(/const flashcards =[\s\S]*?\n\n/, "");

scriptContent = arrayString + scriptContent;

fs.writeFileSync(outputFile, scriptContent, "utf-8");

console.log("✅ Flashcards array updated in script.js");
