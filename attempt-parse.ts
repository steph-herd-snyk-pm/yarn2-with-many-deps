const fs = require("fs");
const yaml = require("yaml");

const lockfile = fs.readFileSync("./yarn.lock", { encoding: "utf-8" });
try {
  yaml.parse(lockfile);
  console.log("Parsed Successfully");
} catch (e) {
  console.error(e);
}
