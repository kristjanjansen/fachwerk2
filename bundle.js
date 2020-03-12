const [_, bundle] = await Deno.bundle("./fachwerk.js");

const encoder = new TextEncoder();
const minified = bundle.replace(/  +/g, " ");
await Deno.writeFile("fachwerk.bundle.js", encoder.encode(minified));
