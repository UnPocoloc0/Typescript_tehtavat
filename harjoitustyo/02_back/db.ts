import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Yhteysaltaaseen laitetaan ympäristömuuttujat
export const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    database: process.env.DB_NAME || "urheilija_db",
    password: process.env.DB_PASSWORD || "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});

