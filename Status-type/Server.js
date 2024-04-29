const http = require("http");
const hostName = "127.0.0.1"
const port = 3000;

const myServer = http.createServer((req,res) => {
  // res.writeHead(202,{"Content-Type" : "text.plain"});
  // res.write("hellow server")

  res.writeHead(202,{"Content-Type" : "text/html"})
  res.write("<h1>hellow server</h1>")
  res.end();
})

myServer.listen(port, () => {
  console.log(`Server raning at http://${hostName}:${port}`)
})
