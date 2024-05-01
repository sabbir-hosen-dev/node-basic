const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("sabbir");
  res.end();
});

const users = ["Sabbir", "aslam", "sani", "nazim", "tamim", "Shohag"];

app.get("/users", (req, res) => {
  res.send(users);
  res.end();
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

app.post("/addUser", (req, res) => {
    const user = req.body;
    user.id = 12;
    res.send(user)
    res.end()
});

app.listen(4200, () => {
  console.log(`Server run at http://localhost:4200`);
});

