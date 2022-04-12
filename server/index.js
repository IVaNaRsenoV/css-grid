require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const data = require("./menu.json");
console.log(data);

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`SERVER WORKED ${PORT}`);
});
