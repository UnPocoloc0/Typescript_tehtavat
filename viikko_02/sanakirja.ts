/*
================================================================================
YLÄTASON KUVAUS:
================================================================================
Tämä REST API toimii suomi-englanti -sanakirjasovelluksen taustapalveluna.
Sanapareja hallitaan txt-tiedostossa, josta luetaan ja johon kirjoitetaan uudet
sanat

Backend tarjoaa kaksi rajapintaa:
1. GET-metodilla ja suomenkielisellä hakusanalla haetaan vastaava englannin
kielen sana
2. POST-metodi tallentaa uuden sanaparin txt-tiedostoon 

================================================================================
PSEUDODOODI:
================================================================================
TIEDOSTON LUKU:
Tuo Express- ja fs -moduulit käyttöön
Määrittele Sanapari -tyyppi
Luo tyhjä taulukoo Sanapari-oliolle
Ota tiedostopolku muuttujaan 
Lue tiedostostosta(tiedostopolku)
Luetaan synkronisesti utf8-merkistöllä
Pilkotaan regex:lla sanapari omalle rivilleen
Tehdään sanaparista string[] -taulukko
Varmistetaan, että molemmat sanat on annettu
JOS fin ja eng on annettu:
  Rakenna Sanapari tyyppinen olio
  Lisää sankirjaan

Määrittele express-palvelin
Määrittele käytettävä portti
MIDDLEWARE: 
Lue pyynnön runko JSON-muodossa -> muuta JS-olioksi
Lue pyynnön runko HTML-muodossa -> muuta JS-olioksi

REITIT:
  GET:
  Hae URL parametrista suomenkielinen sana
  Tarkista, onko hakusana taulukon suomenkielisenä avaimena
  JOS sana ei ole taulukossa -> sanaa ei löytynyt
  Palauta taulukon englanninkielinen vastine

  POST:
  Lue pyynnöstä sanapari (Molemmat pitää löytyä)
  Kirjoita tiedoston loppuun uusi sanapari
  Palauta tilakoodi

KÄYNNISTYS:
  Käynnistä palvelin porttiin 3000

*/
import express from "express";
import fs from "fs";
import path from "path";

interface SanaPari {

  fin: string;
  eng: string;
}

const sanakirja: SanaPari[] = [];
const polku = path.join(import.meta.dirname, "sanakirja.txt");

const data = fs.readFileSync(polku, {
  encoding: "utf8",
  flag: "r"
});

// Regex löytää rivinvaihdon eri käyttiksillä
const sanaRivi = data.split(/\r?\n/)


// Rivi on yksi rivi taulukossa
sanaRivi.forEach ((rivi) => {
// Leikataan rivi sanoiksi -> Tuloksena string-taulukko
  const sanat = rivi.split(" ");

  // Jos molemmat sanat löytyy -> luo sana-olio
  if ( sanat.length >= 2 && sanat[0] && sanat[1]) {

    const sana: SanaPari = {
      fin: sanat[0],
      eng: sanat[1],
    }
    sanakirja.push(sana);
  }
});

const app = express();
const PORT = 3000;

app.use(express.json())

// GET -> 1 sana
app.get("/sanakirja/:sana", (req, res) => {
  const haettavaSana = req.params.sana;

  const sana = sanakirja.find(
    (item) => item.fin === haettavaSana);

    if (!sana) {
      res.status(404).json({ msg: "Sanaa ei löytynyt"});
      return;
    }
  // Palautuu pelkkä englanninkielinen sana
  res.json(sana.eng)
});


// POST -> lisää sana sanakirjaan

app.post("/sanakirja/", (req, res) => {

  const fin = req.body.fin;
  const eng = req.body.eng;

  if (!fin || !eng) {
    res.status(400).json({ msg: "Puuttuva sana"})
    return; 
  }
  const uusiSana: SanaPari = {fin, eng};
  sanakirja.push(uusiSana);

  // Kirjoittaminen

  fs.writeFileSync(polku, `\n${fin} ${eng}`, 
    {encoding: "utf8",
      flag: "a"});

  res.status(201).json(uusiSana);

});


app.listen(PORT, () => {
  console.log(`Palvelin käynnistettiin osoitteeseen ${PORT}`);
});