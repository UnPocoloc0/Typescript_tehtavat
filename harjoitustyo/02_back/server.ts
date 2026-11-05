import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';
import { type Urheilija } from './types/urheilija.js';


// Express-sovellus
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE:
app.use(cors());
app.use(express.json()); // Jäsennä json objektiksi


// API-reitit
app.get('/api/urheilijat', async (req, res) => {
    try {    
        const [rows] = await pool.query('SELECT * FROM urheilijat');
        res.json(rows);
    } catch (error) {
        console.log("Virhe haettaessa urheilijoita: ", error);
        res.status(500).json({ virhe: 'Virhe tietokannassa'});
    }
});

app.get('/api/urheilijat/:id', async (req, res) => {

    const { id } = req.params;
    // Avataan turva-alue
    try {
        // Yhteysallas tekee kyselyn -> odottaa kunnes kannasta tulee vastaus
        // ? on paikanpitäjä -> id-taulukko korvaa tämän
        const [rows] = await pool.query('SELECT * FROM urheilijat WHERE id = ?  ', [id]) as [any[], any]; // Tähän urheilija tilalle (tarkempi)
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

app.post("/api/urheilijat", async (req, res) => {
    // pika debuggaus
    console.log('Vastaanotettu req.body:', req.body);
    let uusiUrheilija = req.body;
    // Vähimmäistiedot tietojen lisäämiselle
    if (!uusiUrheilija || !uusiUrheilija.etunimi || !uusiUrheilija.sukunimi) {
        return res.status(400).json ({ 
            virhe: 'Tiedot ovat puutteellisia, etu- ja sukunimi ovat pakollisia tietoja'
        });
    }
    try { 
        // pool hoitaa tietokantayhteyden -> asynkroninen pyyntö -> ei jumitusta
        // Poimitaan kuittaus muuttujaan -> tämä on suoraan olio
        const [result] = await pool.query('INSERT INTO urheilijat SET ? ',
            // JS-olio muuntuu SQL-sarakkeiksi ja arvoiksi -> olio ? tilalle
            [uusiUrheilija]) as [any, any];

        res.status(201).json({
            // Uuteen olioon tietokannan generoima numero (tallennuksessa 
            // syntyvä)
            // Kopioidaan kaikki avain-arvo -parit tähän olioon -> valmis olio
            id: result.insertId, ...uusiUrheilija
        });
    } catch (error) {
        console.log('Virhe lisättäessä urheilijaa', error);
        res.status(500).json({ virhe: 'Virhe tietokannassa '});
    }
});


app.put("/api/urheilijat/:id", async (req, res) => {
    // Poimitaan URL-osoitteesta id
    const { id } = req.params;
    // Bodyssa on koko urheilijan tiedot Oliona
    const paivitettyUrheilija = req.body;

    // Validointi -> minimitiedot pitää olla mukana
    if (!paivitettyUrheilija || !paivitettyUrheilija.etunimi || !paivitettyUrheilija.sukunimi) {
        return res.status(400).json({
            virhe: "Etu- ja sukunimi ovat pakollisia tietoja"
        });
    }
    try {
        // KORJAUS: otetaan id erilleen
        const { id: _tietokantaId, ...paivitettavatKentat } = paivitettyUrheilija;

        if (paivitettavatKentat.syntymavuosi) {
            const d = new Date(paivitettavatKentat.syntymavuosi);
            // Pilkotaan T:n kohdalta -> Pelkkä vuosi-kuukausi-päivä jää
            paivitettavatKentat.syntymavuosi = d.toISOString().split('T')[0];
        }

        // Paikkamerkit täytetään taulukon alkioilla -> palautuu kuittausolio
        // 1. päivitetetyt urheilijan tiedot -> 2. id
        const[result] = await pool.query(
            "UPDATE urheilijat SET ? WHERE id = ?",
        [paivitettavatKentat, id]) as [any, any];

        // Onko muokattu vai ei -> 1 -> on muokattu 
        if (result.affectedRows === 0) {
            return res.status(404).json({ virhe: "Päivitettävää urheilijaa ei löytynyt"});
        }
        // Palauta päivitetty data pyynnon rungosta -> puretaan nämä avain-arvo-parin arvot olioon -> ei käsin kirjoittamista
        res.json({ id: Number(id), ...paivitettyUrheilija });

    } catch (error) {
     console.log("Virhe päivitettäessä urheilijaa", error);
     res.status(500).json({ virhe: "Tietokantavirhe urheilijaa päivitettäessä"});   
    }
});

app.delete("/api/urheilijat/:id", async (req, res) => {
    // Tekee saman kuin: const id = req.params.id
    const { id } = req.params;
    try {
        // Tässäkin palautetaan kaksiosainen taulukko -> [any, any] viittaa tupleen
        // Destrukturointi poimii ensimmäisen taulukon indeksin
        const [result] = await pool.query("DELETE FROM urheilijat WHERE  id = ?", [id]) as [any, any];
       if (result.affectedRows == 0) {
            return res.status(404).json({ virhe: "Poistettavaa urheilijaa ei löytynyt"});
       }
       res.json({viesti: `Urheilija tunnuksella ${id} poistettu onnistuneesti`})

    } catch (error) {
        console.log("Virhe poistettaessa urheilijaa", error);
        res.status(500).json({ virhe: "Tietokantavirhe urheilijaa poistettaessa"})
    }
});

app.listen(PORT, () => {
    console.log(`Palvelin käynnistetty osoitteessa ${PORT}`);
})

