import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';
import { type urheilija } from './types/urheilija.js';


// Express-sovellus
const app = express();
const PORT = process.env.PORT || 3000;


// MIDDLEWARE:
app.use(express.json()); // Jäsennä json objektiksi
app.use(cors());

app.get('/api/urheilijat', async (req, res) => {
    try {    
        const [rows] = await pool.query('SELECT * FROM urheilijat');
        res.json(rows);
    } catch (error) {
        console.log("Virhe haettaessa urheilijoita: ", error);
        res.status(500).json({ virhe: 'Virhe tietokannassa'});
    }
});

app.listen(PORT, () => {
    console.log(`Palvelin käynnistetty osoitteessa ${PORT}`);
})

