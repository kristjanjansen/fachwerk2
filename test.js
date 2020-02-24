import { test } from "./src/utils/test.js";

import * as array from "./src/utils/array.js";
import * as coordinates from "./src/utils/coordinates.js";
import * as types from "./src/utils/types.js";

const tests = Object.entries({
  ...array,
  ...coordinates,
  ...types
}).filter(([key, value]) => key.startsWith("test_"));

test(tests);
