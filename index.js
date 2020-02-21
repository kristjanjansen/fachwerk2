import { components, fachwerk } from "./fachwerk.js";
fachwerk();

const help = Object.entries(components)
  .filter(([_, { help }]) => help)
  .map(
    ([key, { help }]) => `### ${key}
${help}`
  )
  .join("\n");
