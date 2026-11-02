import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();


// Yhteysaltaaseen laitetaan ympäristömuuttujat
export const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "urheilija_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});

export default pool;