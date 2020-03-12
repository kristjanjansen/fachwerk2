import * as components from "./src/components/index.js";
import * as utils from "./src/utils/index.js";
import * as internals from "./src/internals/index.js";

const tests = Object.entries({
  ...components,
  ...utils,
  ...internals
}).filter(([key]) => key.startsWith("test_"));

const exitCode = utils.test(tests);

if (window.Deno !== undefined) {
  Deno.exit(exitCode);
}
