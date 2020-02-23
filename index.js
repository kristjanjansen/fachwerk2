import { components, fachwerk } from "./fachwerk.js";
fachwerk();

window.onerror = function(message, source, lineno, colno, error) {
  console.log("WA", message, source, lineno, colno, error);
};

document.onerror = function(message, source, lineno, colno, error) {
  console.log("DA", message, source, lineno, colno, error);
};

window.addEventListener("error", e => console.log("WB", e));

document.addEventListener("error", e => console.log("DB", e));

// const help = Object.entries(components)
//   .filter(([_, { help }]) => help)
//   .map(
//     ([key, { help }]) => `### ${key}
// ${help}`
//   )
//   .join("\n");

window.onerror = function(msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1) {
    alert("Script Error: See Browser Console for Detail");
  } else {
    var message = [
      "Message: " + msg,
      "URL: " + url,
      "Line: " + lineNo,
      "Column: " + columnNo,
      "Error object: " + JSON.stringify(error)
    ].join(" - ");

    alert(message);
  }

  return false;
};
