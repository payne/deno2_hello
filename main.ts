export function add(a: number, b: number): number {
  return a + b;
}

function hello_web_server() {
  Deno.serve((_req) => {
    return new Response("Hello world! it's " + (new Date()));
  });
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  console.log("Starting web server....");
  hello_web_server();
}
