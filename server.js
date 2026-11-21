import http from "node:http";

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ready");
});

server.listen(3000, "127.0.0.1");
