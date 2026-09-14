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
================================================================================
TARKEMPI ERITTELY:
================================================================================
TYYPIT JA TIETORAKENTEET:

TIEDOSTOJÄRJESTELMÄ

TAULUKKO- JA MERKKIJONOMETODIT:

EXPRESS-FUNKTIOT:

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

/**
   KÄY LÄPI jokainen rivi:
    Jaa rivi kahtia välilyönnin kohdalta (suomi_sana, englanti_sana)
    JOS molemmat sanat ovat olemassa:
      Luo olio { fin: suomi_sana, eng: englanti_sana }
      Lisää olio 'sanakirja'-taulukkoon
  Aseta Express-middlewaret (express.json) JSON-datan käsittelyyn
 */

  // Rivi on yksi rivi taulukossa
sanaRivi.forEach ((rivi) => {
// Leikataan rivi sanoiksi -> Tuloksena string-taulukko
  const sanat = rivi.split(" ");

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

/*
  [GET /sanakirja/:sana] -> Hae englanninkielinen käännös:
    Lue hakusana URL-parametrista (req.params.sana)
    Etsi 'sanakirja'-taulukosta alkio, jonka 'fin' vastaa hakusanaa 
    (pienillä kirjaimilla)
    JOS sana löytyy:
      Palauta sana-olio JSON-muodossa (Status 200 OK)
    MUTTA JOS sanaa ei löydy:
      Aseta HTTP-statukseksi 404 (Not Found)
      Palauta virheilmoitus { message: "Sanaa ei löytynyt" }
*/
// GET -> 1 sana
app.get("/sanakirja/:sana", (req, res) => {
  const haettavaSana = req.params.sana;

  const sana = sanakirja.find(
    (item) => item.fin === haettavaSana);

    if (!sana) {
      res.status(404).json({ msg: "Sanaa ei löytynyt"});
      return;
    }

  res.json(sana.eng)
});


app.listen(PORT, () => {

  console.log(`Palvelin käynnistettiin osoitteeseen ${PORT}`);
});