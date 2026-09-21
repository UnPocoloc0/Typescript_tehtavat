/*==============================================================================
YLÄTASON KUVAUS: 
Sovelluksen pääpiste (Entry Point). Alustaa Express-palvelimen, 
määrittää keskeiset middleware-asetukset (CORS, JSON-parsaus), ohjaa /posts-reitit 
eteenpäin sekä tarjoaa globaalin virheidenkäsittelyn.
Asiakas (Postman) ──> server.js ──> postRoutes.js ──> postControllers.js ──> Post.js (Model) ──> Tietokanta
==============================================================================*/

/*==============================================================================
PSEUDOKOODI:
Lataa ympäristömuuttujat .env-tiedostosta ja alusta Express-sovellus.
Ota käyttöön JSON-parsaus ja CORS-asetukset pyyntöjen käsittelyä varten.
Määritä reitityksen keskitetty ohjaus /posts-alkuisille pyynnöille.
Käynnistä palvelin kuuntelemaan määritettyä porttia ja ilmoita konsoliin.
==============================================================================*/

/*==============================================================================
TARKEMPI KUVAUS:
Toimii sovelluksen keskeisenä käynnistyspisteenä. Lataa Express-kirjaston, ottaa 
käyttöön middleware-kerrokset (kuten express.json() datan parsimiseen ja CORS 
ristikkäisten pyyntöjen sallimiseen) sekä kytkee reitit (/posts) ohjautumaan 
postRoutes-tiedostoon. Sisältää myös globaalin virheenkäsittelylogiikan ja 
käynnistää HTTP-palvelimen kuuntelemaan .env-tiedostossa määritettyä porttia.
==============================================================================*/

require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Content-type", "application/json");

  // Pass to next layer of middleware
  next();
});

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", require("./routes/postRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went really wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
