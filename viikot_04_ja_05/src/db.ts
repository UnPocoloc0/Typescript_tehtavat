import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Saadaan konffaustiedosto käyttöön
dotenv.config();


export const pool = mysql.createPool({
  host: process.env.DBHOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "opinnaytetyot",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

});