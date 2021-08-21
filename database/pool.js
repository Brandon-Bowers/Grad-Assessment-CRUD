const { Pool } = require("pg");

const PGURI =
  "postgres://qznfwdjx:SuHsHLJGxmtqfKAiV73PCW7kQw7C7tFX@chunee.db.elephantsql.com/qznfwdjx";

const pool = new Pool({ connectionString: PGURI });

module.exports = {
  query: (text, params, callback) => {
    console.log("DB Pool executed query => ", text);
    return pool.query(text, params, callback);
  },
};
