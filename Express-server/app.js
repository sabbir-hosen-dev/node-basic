const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("get matod is run");
});

app.post("/", (req, res) => {
  res.send("post matod is run");
});
app.put("/", (req, res) => {
  res.send("put matod is run");
});
app.delete("/", (req, res) => {
  res.send("delete matod is run");
});

module.exports = app;
