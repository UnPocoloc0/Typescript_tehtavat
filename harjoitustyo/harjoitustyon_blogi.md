# Harjoitustyön blogi

# Tietokannan luonti
* Valitaan default schema
* Tietokannan luonnin jälkeen voidaan valita tietty tietokanta
* Schema on kyseisen tietokannan asetukset
* Localhost on paikalliseslla koneella pyörivä palvelin

# Backend
* Express, cors, dotenv, mysql2
# Typescript asennus
npm install -D typescript ts-node nodemon @types/node @types/express @types cors

1. Typescript kääntäjä
2. TS-tiedostot noden päällä
3. Palvelimen automaattinen käynnistys
4. Tuodaan tiedot sisäänrakennetuista tyypeistä
5. Yhteysaltaan käyttäminen createConnectionin sijaan

# TS Asetustiedosto
npx tsc --init

# TSConfig 
* "moduleResolution": "node"
* "esModuleInterop": true
* npm install -D tsx -> muuta package.json dev-skripti samalla
* exc -> "dev": "nodemon --exec tsx server.ts" 
  
Pitää määrittää moduulirakenne -> import/ export, jolloin tuominen muihin tiedostoihin on selkeämpää.

Pitää hyväksyä skriptejä käsin
  
# Rest API
* Toteutetaan CRUD-toiminnallisuus 
* Tietokantyhteys tyypitetään || -syntaksilla
* API:n rooli: Api toimii logiikkakerroksena ilman sovelluksen visuaalista kuorta -> tulkki käyttöliittymän ja datan välissä
* Backend-palvelimella tieto turvassa
* Onko oiketta lukea dataa -> tarkistetaan joka pyynnön kohdalla erikseen
## PUT
* Mystinen 400 Bad Request -virhe -> validaatiossa ei ollut not-operaattoria mukana
* mysql2 -syntaksi säästää käsin kirjoittamisen vaivaa -> luetaan pyynnön bodysta tiedot olioon
* Syntaksissa tapahtuu paljon asioita pinnan alla -> destrukturointi ja spread-operaattorit
* Haetaan parametrit URL:sta ja puretaan rungosta avain-arvo -parit
# Git
* Tehdään kehitys omassa haarassa ja yhdistetään aika ajoin päähaaraan
* Päähaara pusketaan palvelimelle
* Switch ja checkout-komennot
* .env gitignoreen mukaan -> salasanat eivät mene versionhallintaan

# Sekalaista
* Export tuo komponentin näkyviin luokan ulkopuolelle
* Module pitää laittaa node-muotoon
* Import vaatii koko polun tiedostopäätteineen -> polku osoittaa käännökseen
* // "dev": "nodemon --exec ts-node server.ts" -> tsx muotoon
* Thunder Client vaatii kirjautumista
* Destrukturointi vähentää toisteista koodia

# Ongelmia

* puuttuvat ! operaatiot
* Taulun nimi väärin -> Bad Request ja Serverin virhe

# Välivaihe
Tähän mennessä saavutettu (Backend Foundations) 
* GitNode.js-projekti alustettu, .gitignore ja .env tietoturvaa varten.
* TietokantaMariaDB-kanta (urheilija_db) ja taulu pystyssä. db.ts hyödyntää
mysql2/promise-poolia.
* TypeScript & ESMKonfiguroitu tiukka 
* TypeScript-ympäristö
(verbatimModuleSyntax, ESM-tuet) ja tsx/ts-node.
* TyypitysUrheilija-interface
luotu (types/urheilija.ts).
* Express-palvelinserver.ts käynnistyy ilman virheitä
portissa 3000 CORS- ja JSON-middlewareilla.

## Callback
* Call back-funktion kutsuminen -> Virheille altis tapa
* Promises (Async  & Await) -> Funktion suoritus pysäytetään
* Tietokanta -> JS-olio (koodi) -> res.json (verkko)

## SQL
* Select ja insert palauttaa erilaiset arvot
* Select palauttaa tietueet taulukossa 
* Insert palauttaa yhden kuittauksen

# DELETE

## Asennukset ja ympäristö toisella koneella
Yhteenveto kakkoskoneen ympäristön asennuksesta
1. Backend-ympäristö (02_backend) Lähtötilanne: Koodipohja oli siirretty Gitin
kautta sporttista-haaraan, mutta backend heitti aluksi virheitä (404 ja
myöhemmin 500 ER_DBACCESS_DENIED_ERROR).

Syy & Ratkaisu:

Reittiosoitteet täsmennettiin REST API -käytännön mukaisiksi (/api/urheilijat).

Konekohtainen .env-tiedosto tarkistettiin ja täsmäytettiin tämän koneen
MariaDB-asetusten (root-käyttäjä ja tietokannan nimi urheilijatDB) kanssa.

Tulos: Backend pyörii ja kaikki CRUD-operaatiot (GET, POST, PUT, DELETE)
toimivat moitteettomasti.

2. Frontend-ympäristö (03_front) Lähtötilanne: React + Vite + TypeScript
-alustus kohtasi alkuun pakettiristiriidan (TypeScript 7 vs. typescript-eslint)
ja projektitiedostot luotiin vahingossa sisäkkäiseen vite-project-kansioon.

Syy & Ratkaisu:

Siistittiin hakemistorakenne, korjattiin package.json-tiedostoon yhteensopiva
TypeScript-versio (^5.6.3) ja ajettiin asennus lipulla --legacy-peer-deps.

Selkeytettiin Node.js-maailman perusperiaate: backendillä ja frontendillä on
omat erilliset node_modules-kansionsta ja package.json-tiedostonsa.

Tulos: Viten kehityspalvelin käynnistyy puhtaasti ja ohjautuu oikeaan
03_front-ympäristöön (http://localhost:5173/).

3. Tietokantahuomiot & Huomiot jatkoa varten AUTO_INCREMENT: Todettiin, että
poistetun tietokantarivin ID-numeroa ei käytetä uudelleen, vaan uusi POST-lisäys
saa aina seuraavan vapaan sarjanumeron.

Päivämäärät: Tiukka DATE-tyyppi vaatii päivämäärän
muodossa YYYY-MM-DD (eikä ISO-kelloaikaleimaa T22:00:00.000Z).