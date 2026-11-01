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

# TS Asetustiedosto
npx tsc --init

# TSConfig 
* "moduleResolution": "node"
* "esModuleInterop": true
  
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