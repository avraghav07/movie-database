const express = require("express");
const cors = require("cors");
const movies = require("./movies");

const router = express.Router();

router.use(cors());

router.get("/movies", movies.get);

router.get("/*", (_request, response) => {
  response
    .status(404)
    .json({ error: "INVALID_ENDPOINT", message: "Invalid API Endpoint" });
});

router.use((error, _request, response, _next) => {
  response
    .status(404)
    .json({ error: "INTERNAL_SERVER_ERROR", message: error.message });
});

module.exports = { router };
