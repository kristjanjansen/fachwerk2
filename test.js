import { test } from "./src/utils/test.js";

import * as array from "./src/utils/array.js";
import * as coordinates from "./src/utils/coordinates.js";
import * as types from "./src/utils/types.js";

import * as transform from "./src/internals/transform.js";
import * as points from "./src/internals/points.js";

const tests = Object.entries({
  ...array,
  ...coordinates,
  ...types,
  ...transform,
  ...points
}).filter(([key, value]) => key.startsWith("test_"));

test(tests);
