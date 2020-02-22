import { components, fachwerk } from "./fachwerk.js";
fachwerk();

window.onerror = function(message, source, lineno, colno, error) {
  console.log("AAAA", message, source, lineno, colno, error);
};

window.addEventListener("error", e => console.log("W", e));

(function() {
  console.log = function(message) {};
})();

// const help = Object.entries(components)
//   .filter(([_, { help }]) => help)
//   .map(
//     ([key, { help }]) => `### ${key}
// ${help}`
//   )
//   .join("\n");
