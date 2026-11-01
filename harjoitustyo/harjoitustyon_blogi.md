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