const express = require("express");
const request = require("request");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const url = "https://www.google.com";
  request({
    url,
    json: true,
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
