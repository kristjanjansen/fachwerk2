import * as utils from "./src/utils/index.js";

const tests = Object.entries({ ...utils }).filter(([key, value]) =>
  key.endsWith("_test")
);

console.log(tests);
