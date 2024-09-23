// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


import "dotenv/config";

export default {
  
  client: "mysql2",
  connection: {
    host: process.env.API_DB_HOST,
    database: process.env.API_DB_NAME,
    user: process.env.API_DB_HOSTNAME,
    password: process.env.API_DB_PASSWORD,
    charset: "utf8",
  },
};