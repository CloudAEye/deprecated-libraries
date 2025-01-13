const express = require("express");
const request = require("request");
const sum = require("./sum");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const url = "https://api.cloudaeye.com/me";
  request({
    url,
    json: true,
  });
  const sum = sum(1, 2);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
