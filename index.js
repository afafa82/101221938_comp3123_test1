const fs = require("fs");

try {
  fs.mkdirSync("Logs");
  console.log("Logs directory created");
  let files = [];

  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync("./Logs/" + fileName, "This is log" + i);
    console.log(fileName);
    files.push(fileName);
  }
  if (files.length != 0) {
    for (const file of files) {
      fs.unlinkSync("./Logs/" + file);
      console.log("delete files..." + file);
    }
  } else {
    alert("file does not exist!");
  }

  // fs.rmdirSync("Logs", { recursive: true });
} catch (e) {
  if (e.code == "exist") {
    console.log("The director named Logs exists");
  } else {
    console.log(e);
  }
}
