import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres", // seu user
  password: "2134518623", // sua senha
  database: "random-people"
})

export { connection };