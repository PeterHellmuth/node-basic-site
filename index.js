var http = require("http");
var fs = require("fs");
var path = require("path");

const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/html" });

  let serveHTML = "404.html";
  const pathPairs = [
    { path: "/", file: "index.html" },
    { path: "/about", file: "about.html" },
    { path: "/contact-me", file: "contact-me.html" },
  ];

  pathPairs.forEach((pair) => {
    if (req.url === pair.path) {
      serveHTML = pair.file;
    }
  });

  fs.createReadStream(serveHTML).pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
