import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';
import { type urheilija } from './types/urheilija.js';


// Express-sovellus
var app = express();
const PORT = process.env.PORT || 3000;


// MIDDLEWARE:
app.use(express.json); // Jäsennä json objektiksi
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Methods",
                  "GET, POST, PUT, DELETE");

    res.setHeader("Access-Control-Allow-Headers",
                  "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token");
    res.setHeader("Content-type", "application/json");

    next();

});


app.listen(PORT, () => {
    console.log(`Palvelin käynnistetty osoitteessa ${PORT}`);
})