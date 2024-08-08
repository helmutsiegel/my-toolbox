const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Append the custom header
  req.headers['X-Custom-Header'] = 'My Custom Value';

  proxy.web(req, res, {
    target: 'http://example.com', // Target server URL
    changeOrigin: true,
  });
});

server.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});