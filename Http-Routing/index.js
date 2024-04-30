const http = require("http");
const fs = require("fs");
const PORT = 3000;
const HOSTNAME = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    return fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./Vews/Home.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./Vews/About.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./Vews/Contact.html");
  } else {
    handleReadFile(404,"./Vews/Error.html")
  }
});

myServer.listen(PORT, HOSTNAME, () => {
  console.log(`Server runing at http://${HOSTNAME}:${PORT}`);
});
