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

// TODO: GET by ID

/*
app.get("/henkilot/:id", (req, res) => {
  const id = Number(req.params.id);
  conn.query("SELECT * FROM henkilot WHERE id=?", id, (err, rows) => {
    if (err) throw err;
    res.end(JSON.stringify(rows[0]));
  });
}); 
*/

app.get('/api/urheilijat/:id', async (req, res) => {

    const id = Number(req.params.id);
    const [rows] = await pool.query('SELECT * FROM henkilot WHERE id=?', id, (err,rows) => {
        if (err) throw err;
        res.end(JSON.stringify(row[0]));
    }
});
// TODO: POST

// TODO: PUT

// TODO: DELETE

app.listen(PORT, () => {
    console.log(`Palvelin käynnistetty osoitteessa ${PORT}`);
})

