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

app.get('/api/urheilijat/:id', async (req, res) => {

    const { id } = req.params;
    // Avataan turva-alue
    try {
        // Yhteysallas tekee kyselyn -> odottaa kunnes kannasta tulee vastaus
        // ? on paikanpitäjä -> id-taulukko korvaa tämän
        const [rows] = await pool.query('SELECT * FROM urheilijat WHERE id = ?', [id]) as [any[], any]; // Tähän urheilija tilalle (tarkempi)
    if (rows.length === 0) {
        // Ei syntaksivirhettä -> resurssia ei löydy
        return res.status(404).json({ viesti: 'Urheilijaa ei löytynyt'});
    }
    // query palauttaa taulukon jossa:
    // [0] -> Hakutulosten rivit -> otetaan vain urheilijan tieto
    // [1] -> Metatieto
    // tämä on olio jolla ominaisuuksia (nimi, laji yms.)
    res.json(rows[0]);

    } catch (error) {
        console.log("Virhe haettaessa urheilijaa ID:lla");
        res.status(500).json({ virhe: 'Tietokantavirhe'});
    }
});


// TODO: POST

// TODO: PUT

// TODO: DELETE

app.listen(PORT, () => {
    console.log(`Palvelin käynnistetty osoitteessa ${PORT}`);
})

