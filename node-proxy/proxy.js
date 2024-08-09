const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Log the original request
  console.log('Original request:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });
  
  // Append the custom header
  req.headers['X-Custom-Header'] = 'My Custom Value';

 proxy.on('proxyReq', (proxyReq, _req, _res, options) => {
    // Log the forwarded request
    console.log('Forwarded request:', {
      method: proxyReq.method,
      url: proxyReq.path,
      headers: proxyReq.getHeaders(),
    });
  });
  
  proxy.web(req, res, {
    target: 'http://example.com', // Target server URL
    changeOrigin: true,
    secure: false // not recommended in production
  });
});

server.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
