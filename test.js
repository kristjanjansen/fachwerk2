import { test } from "./src/utils/test.js";
import * as array from "./src/utils/array.js";

const tests = Object.entries({ ...array }).filter(([key, value]) =>
  key.endsWith("_test")
);

test(tests);
