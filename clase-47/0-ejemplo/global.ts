console.log(Deno);

const encoder = new TextEncoder()
const data = encoder.encode("Hello Deno!")

await Deno.writeFile('text.txt', data)

console.log(Deno.args);
