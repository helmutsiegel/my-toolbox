const Service = require("node-windows").Service;

const svc = new Service({
  name: "nodeService",
  description: "this is the description",
  script: ".\\proxy.js",
});

svc.on("install", () => {
  svc.start();
});

svc.install();
