const http = require("http");
const qs = require("querystring");
const PORT = 3002;

const server = http.createServer((req, res) => {
  if( req.url === "/" && req.method === "GET") {
    const data = [
      "Go to /api/ page"
    ];

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.write(JSON.stringify(data));
  }
  
  if( req.url === "/api/" && req.method === "GET") {
    const data = [
      0, 1, 2, 3
    ];

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.write(JSON.stringify(data));
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});