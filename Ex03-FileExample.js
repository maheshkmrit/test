const fs = require("fs");
const { stringify } = require("querystring");
const path = "./Ex01-NodejsBasics.js";

console.log("-------------------------------");
const contents = fs.readFileSync(path, "utf-8");
console.log(contents);
console.log("---------------------------------");

fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("This text will Execute at last.");

//////////-------------------------------------------////////////////////////
const fileReadSync = function (path) {
  fs.readFileSync(path, "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const fileReadAsync = function (path) {
  fs.readFile(path, "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

//------------------//-------------------------------------------//

const obj = { id: 101, name: "Mike", address: "Bagalore" };

function writeInFileSync() {
  fs.writeFileSync("SampleTxtFile.txt", JSON.stringify(obj), "utf-8");
}

writeInFileSync();

function writeInFileAsync() {
  fs.writeInFileAsync(
    "SampleTxtFile.txt",
    JSON.stringify(obj),
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );
}

function appendingToFile() {
  fs.appendFile(path, "utf-8", (err) => {
    if (err) console.log(err);
  });
}

function appendingToFileAsync(path, txtToAppend) {
  fs.appendFile(path, txtToAppend, "utf-8", () => {
    const dt = "\n" + txtToAppend + "\n";
    console.log("Text Appended Successful");
  });
}

appendingToFileAsync("SampleTxtFile.txt", "I'm appended in file");
