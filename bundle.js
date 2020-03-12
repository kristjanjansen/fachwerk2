const [_, bundle] = await Deno.bundle("./fachwerk.js");

console.log(bundle.replace(/  +/g, " "));
