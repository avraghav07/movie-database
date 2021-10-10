const express = require("express");
const path = require("path");
const api = require("./modules/api");

const app = express();

app.use("/api", api.router);

app.use(
  express.static(path.join(__dirname, "..", "build"), {
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.listen(process.env.PORT || 4000);
