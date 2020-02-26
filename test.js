import * as fachwerk from "./fachwerk.js";

const tests = Object.entries({ ...fachwerk }).filter(([key]) =>
  key.startsWith("test_")
);

const exitCode = fachwerk.test(tests);

if (window.Deno !== undefined) {
  Deno.exit(exitCode);
}
