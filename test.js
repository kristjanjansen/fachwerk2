import * as utils from "./src/utils/index.js";
import * as internals from "./src/internals/index.js";

const tests = Object.entries({
  ...utils,
  ...internals
}).filter(([key]) => key.startsWith("test_"));

utils.test(tests);
