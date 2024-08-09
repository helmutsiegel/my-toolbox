const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Log the original request
  console.log("Original request:", {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });

  proxy.on("proxyReq", (proxyReq, _req, _res, options) => {
    // Log the forwarded request
    console.log("Forwarded request:", {
      method: proxyReq.method,
      url: proxyReq.path,
      headers: proxyReq.getHeaders(),
    });
  });

  proxy.on("proxyRes", (proxyRes, req, res) => {
    console.log("Response from target server:");
    console.log("Status:", proxyRes.statusCode);
    console.log("Headers:", proxyRes.headers);
  });

  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log("Request body:", body);

    // Restore the request body for the proxy
    req.body = body;

    // Append the custom header
    req.headers["Custom Header"] = "Value";

    // Create a new stream from the buffered body
    const bodyStream = require("stream").Readable.from(body);

    proxy.web(req, res, {
      target: "http://example.com", // Target server URL
      changeOrigin: true,
      secure: false,
    });
  });
});

server.listen(3000, () => {
  console.log("Proxy server running on port 3000");
});
