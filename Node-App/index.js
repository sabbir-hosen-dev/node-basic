const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.0.0.1";

const handleFile = (fileName, statusCode, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    handleFile("./Home.html", 200, res);
  } else if (req.url === "/about") {
    handleFile("./About.html", 200, res);
  } else if (req.url === "/contact") {
    handleFile("./Contact.html", 200, res);
  }else(
    handleFile("./Error.html",400,res)
  )
});

myServer.listen(port, hostName, () => {
  console.log(`Server runing at http://${hostName}:${port}`);
});
