const { pool } = require("../../helpers/database");

const get = async (request, response) => {
  const movies = await pool.query("SELECT * FROM movies");
  response.json(movies.rows);
};

module.exports = { get };
