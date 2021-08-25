addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const response = await fetch('https://raw.githubusercontent.com/jack850628/xi-down-yuan-up/main/xi-down-yuan-up.js');
  const newResponse = new Response(response.body, response);
  
  newResponse.headers.set("Access-Control-Allow-Origin",'*');
  newResponse.headers.set("content-type",'text/javascript; charset=utf-8');

  return newResponse;
}