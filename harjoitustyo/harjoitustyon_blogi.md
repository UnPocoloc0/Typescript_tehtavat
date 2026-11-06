# Simon harjoitustyön blogi

## Git
Olen kurssin aikana pitänyt kahta Git-repositiota yllä. Aiemmilla kursseilla ongelmana on ollut koodin hajaantuminen moneen eri paikkoihin ja projekteihin, jolloin toimivien mallien löytäminen ja vertailu on ollut hankalaa. Tällä kurssilla tein harjoitustyötä samaan repositioon,  jossa sijaitsevat kurssin muutkin viikkotehtävät. Versionhallinnasta on tässä vaiheessa opintoja tullut jo hyvä ystävä, enkä voi kuvitellakaan mitään ohjelmointiin liittyvää tehtävää, ilman että versionhallinta on tukemassa työskentelyä. Koska tallennan kehitystyötä melko pienillä inkrementeillä, niin tämä poistaa tiettyä stressiä, jos jokin asia menee pahasti vikaan. Pahimmassakin tapauksessa menetän noin 10 minuutin työn, joka on nopea paikata tarvittaessa. 

Kokonaisen Full stack-sovelluksen tekeminen vaikutti aluksi melko abstraktilta, koska tällä kurssilla oppimiskäyrä on hyvin jyrkkä ja käytettäviä teknologioita ja kehikoita on lukematon määrä. Yritin aluksi tehdä mielessäni hyvin karkeaa jaottelua tulevista työvaiheista: mitkä asiat liittyvät tietokantaan ja taustapalveluihin, mitkä taas liittyvät enemmän käyttöliittymän ja siinä tapahtuvaan tilanhallintaan. Tämä karkea jaottelu auttoi luomaan edes jonkinlaisen tiekartan tehtävän suorittamiselle. Toin tehtävänannon txt-muodossa projektiin mukaan ja käytin tätä itselleni vaatimusmäärittelynä. Tästäkin on muodostunut itselleni tapa, eli tiettyjä tärkeitä dokumentteja on järkevää kuljettaa projektin mukana, jolloin sitä ei tarvitse etsiä tietokoneen resurssienhallinnasta. Lisäksi nämä txt- ja MD-dokumentit pysyvät aina ajantasalla. 

Tehtävässä oli annettu esitietoja, joita urheilijasta tulisi löytää. Tämä toimii hyvänä ohjeena tietokannan muodostamiselle ja siitä löytyville kentille. Käytän monia käyttöjärjestelmiä, mutta eniten kuitenkin Macia. Vaikka Koodasin itsekseni, pyrin vaihtamaan työasemaa päivittäin. Näin pystyn simuloimaan tiimityöskentelyä, ja miten version allinta toimisi tiimin kanssa. Koska konfiguraatiotiedostot eivät mene versioon hallintaan, eivätkä myöskään kehitysaikaiset riippuvuudet. Alussa jouduin riippuvuuksianäitä konfiguroimaan eri koneille. Asioiden toistaminen on kuitenkin tässä ainoastaan hyvä asia. Koneillani pyörii MysSql tietokantamoottorina, ja graafisena tietokannan ohjaimena käytin DataGrip-sovellusta, koska pidän JetBrains-IDE:n visuaalisesta ilmeestä hyvin paljon. Tässä on myös tuttuuselementti, eli kaikki JetBrainsin kehitysympäristöt näyttävät hyvin samankaltaisilta, jolloin työn aloittaminen on kivutttomampaa.

## Tietokanta ja sen luominen
Tein tietokannanluontiskriptin, joka loi tietokannan urheilija_db ja sinne urheilijat-taulun ja tauluun vaaditut sarakkeet. ID:n luomisesta tietokanta huolehtii itse, mutta muut tiedot pitää syöttää. Tässä oli jonkun verran ongelmia projektin myöhemmissä vaiheissa, esimerkiksi ID:llä lisätessa poistaessa. `MIKÄ FUNKTIO?`. Mietin, olisiko urheilijan syntymäaikaan riittänyt pelkästään vuosiluku, jolloin olisin voinut käsitellä yksinkertaisempaa tietotyyppiä, kuten numeroa. Missä vaiheessa urhei lisätessä tiedot eivät välttämättä päivity kantaan, ellei syntymäaika ole juuri oikeassa muodossa. Koska tietoa on muunnetaan olijoista tekstiksi, näitä ihmeellisiä muunnosvirheitä voi ilmetä myöhemmin. Tietokannan pystyttämisen jälkeen luin käyttäjä user salasanalla user1. Eli ohjenuorana, että mitään järjestelmän vauvojen oikeuksia ei tietokantaan anneta. Tässä tapauksessa riittää pelkät CRUD-ominaisuuddet urheilijat-taulussa. Annoin aluksi ehkä liian lyhyitä rajoituksia nimillä ja etenkin URL osoitteelle, joka tarvitsi mahdollisuuden olla huomattavasti pidempi, eli 255 merkkiä pitkä. Tämä siksi, että URL-osoitteet voivat olla välillä hyvinkin pitkiä. Alkuun pohdin myös saavutuksille oman taulun tekemistä, koska yhdellä urheilijalla voi olla monia saavutuksia. Tämän jätin kommentteihin vertailua helpottamaan, mutta nyt tietokannan rakenne jätettiin mahdollisimman yksinkertaiseksi. 

## Arkkitehtuurimalli
Tämä projekti on ollut aiempia projekteja laajempi arkkitehtuuriltaan, joten hyvä suunnittelu ja käsitys projektin rakenteesta ylätasolla auttoi. Sovelluksen arkkitehtuuri jaettiin kolmeen erilliseen osaan, eli tietokantaan, ja sitä ohjaavan välikerrokseen, sekä käyttäjä näkyvään käyttöliittymään. Middleware toteutettiin Express-teknologialla, koska sitä käytettiin kurssilla ja se on hyvin käytetty tapa hallinnoida SQL-kyselyitä. Käyttöliittymä pyrittiin toteuttamaan Reactin ja Context-Apilla. Bootstrap oli tarkoitus ottaa käyttöön myös, jotta käyttöliittymästä saataisiin responsiivinen. Lopullisesta versiosta tämä käyttöliittymän viilaus on jätetty ajanpuutteen vuoksi pois. Tämä olisi kuitenkin hyvä vapaa-ajan projekti tehdä myöhemmin loppuun. Tällä hetkellä pidän tärkeämpänä, että perus SQL-kyselyt toimivat ja yhteystieto tietokantaan toimii, sekä sovelluksen kokonaitilan hallinta. Esteettisesti miellyttävämpi käyttöliittymä ei mielestäni tuo juurikaan lisää tuohon logiikkapuoleen, ja käyttöliittymien suunnittelua ja responsiivisuutta on sivuttu muilla koulun kursseilla aiemmin. 


### Ympäristön alustus

Aluksi oli tärkeä saada kehitysympäristö pystyyn. Tietoturva otettiin huomioon ympäristön avustuksesta niin, että tietokanta yhteys otettiin erilliseen .env-tiedostoon. Luotiin gitignore- sääntö, että tätä tiedostoa ei koskaan vielä versionhallintaan mukaan. 

```
PORT=3000
DB_HOST=127.0.0.1
DB_USER=user
DB_PASSWORD=user1
DB_NAME=urheilija_db
```

Back endissa teknologiat olivat:
* Node.js typescriptin ajamiseen paikallisesti
* Express-framework toimi middlewarena
* Typescript valittiin ohjelmointikieleksi, koska tämä on tyyppiturvallisempi kieli kuin javascript
  


## Kehitysaikaiset riippuvuudet

Avuksi piti asentaa kehitystyökalut komennolla:

```
npm install -D typescript ts-node nodemon @types/node @types/express @types/cors
```
Nodemonin hyvä puoli oli siinä, että serveri ja ei tarvinnut aina käynnistää uudelleen, kun koodin tuli jotain muutoksia. Tämä on näppärä tapa hallita muutoksia reaaliajassa. 
tsconfig-tiedosto asennettiin komennolla.
```
npx tsc --init
```

Ensimmäisenä tehtävänä oli tuoda käyttöön mysql2, joka tehtiin db.ts-tiedostossa. Samassa tiedostossa otettiin käyttöön dotenv, jonka avulla tietokantayhteyden kredentiaalit voidaan lukea  konfiguraatiotiedostosta. Luotiin ympäristömuuttujille oma yhteysallas, jonka avulla SQL-kyselyiden tekeminen oli jatkossa kätevämpää. Tähän jouduttiin antamaan vaihtoehtoisesti sen takia, jos tietokantayhteys ympäristömuuttujien avulla ei jostain syystä olisi onnistunut. Kuitenkin pyrittiin ensisijaisesti käyttämään konfiguraatio tiedoston kredentiaaleja. Näiden määritysten jälkeen tietokantayhteyden pitäisi toimia. 

Koska TS on tyypitetty kieli, niin urheilija voidaan mallintaa omalla oliolla, joka pitää sisällään kaikki urheilijan liittyvät tiedot. Tämä dataluokka/ rajapinta helpottaa olion tietojen hakemista ja päivittämistä myöhemmin. Nämä luokan ominaisuudet vastaava tietokannassa olevia taulun sarakkeita. Tätä mallia käytetään myöhemmin, kun palautetaan urheilijan tietoja, tai päivitetään niitä. Kaikki luokan ominaisuudet voidaan asettaaa, mutta ID-kentän tietokanta generoi automaattisesti primary keyn avulla. Tässä vaiheessa serveri pyörii paikallisesti osoitteessa 3 000 ilman virheitä, data mallin urheilijaa varten oli valmis ja tarvittavat kehitys aikaiset riippuvuudet asennettu. 

## Middleware
Seuraavaksi alkoi varsinainen Middlewaren rakentaminen, eli kuinka saadaan välitettyä http-pyyntöjä tietokantaan asti. Tämä oli mielestäni järkevä tapa edetä koska ei ole mitään järkeä kutsua sellaisia funktioita, joissa ei ole toiminnallisuutta vielä olemassa. Siksi etenin yksi metodi kerrallaan, joita tallensin ahkerasti versionhallintaan.  

Riippuvuudet back endiin saatiin komennolla:
```
typescript, ts-node, @types/express, @types/node, @types/cors
````
Tämän jälkeen näitä komponentteja ja pystytään tuomaan taustajärjestelmään mukaan. Kirjoitin Back endiin tyhjät metodirungot seuraaville metodeille: 
GET, GET by ID, POST, PUT ja DELETE. Tavoitteena oli täydellisen CRUD-toiminnallisuuden tekeminen sovellukseen. Express otettiin oma muuttujan talteen, jonka jälkeen se tarjoaa hyödyllisiä metodeita, kuten json-muotoisen datan muuttaminen objektiksi. Med muistuttavat rakenteeltaan toisiaan, eli ne ovat kaikki assynkronisia. Tämä tarkoittaa sitä, että metodin suoritus keskeytyy, kunnes tietokannasta tulee vastaus. Se ei jää siis varaamaan resursseja turhaan. Pyyntö ja vastausta varten on omat muuttujat. Suurimmassa osassa metodeita käytetään ID-parametria, jolla SQL-kysely voidaan koittaa koskemaan jotain tiettyä urheilijaa. Kaikkiin metodeihin tehtiin Try-Catch-lohkot. Vastaus tuottaa aina json-muotoista dataa, joten tämä palautetaan aina, olipa kyseessä onnistunutta epäonnistunut kyselen. 

GetUrheilijat-metodi. Tähän riittää pelkkä URL-osoite, koska haetaan taulusta kaikki tietueet. Lisäysmetodi toteutettiin melko kevyesti, eli tiedoksi riittivät etu- ja sukunimet. Uuden urheilijan tiedot pystytään lukemaan vasta vastauksen sanomasta, ja tässä vaiheessa tuo urheilija-rajapinnan tekeminen alkaa maksamaan itseään takaisin. Nyt pystytään kyselyssä kysymysmerkin tilalle sijoittumaan kokonainen uusi urheilija-olio. Valikoiessa minimi tietoja, tässä unohtui nyt operaation käyttäminen, joka esti urheilijan päivittämisen. Eli pieni !-merkin puuttuminen aiheutti harmaita hiuksia. Delete-metodi oli toteutukseltaan siinä mielessä yksinkertaisempi, koska sen ei tarvitse palauttaa mitään. Toki poistettavaa urheilijan ID mikä on. Päivitys-metodi oli monessakin mielessä hankala, koska tässä sotkee tietokannan automaattisesti luotu ID, sekä urheilijan syntymävuoden käsittely DATE-tyyppisenä. Myöhemmissä vaiheessa syntymävuoden ollessa väärässä muodossa, yksistään tämä esti tietoihin päivittämiseen kantaan. 

Syntakssellisesti tässä vaiheessa oli piilotettu tieto. Eli, kun käytetään yhteys allasta, niin kyselyt tuottavat taulukon, jossa on varsinainen data ensimmäisessä indeksissä ja metadata toisessa indeksissä. Kysymysmerkin käyttö kyselyssä tarkoittaa paikan pitäjää, eli tähän laitetaan haluttu tieto. Useassa tapauksessa tämä oli juuri tuo urheilijan ID-tunnus. Haettava palvelin on sinänsä aivan sama kuin aiemminkin, mutta nyt parametreihin tarvitaan tämä urheilijan yksilöivä tieto. Jonkun verran oli ongelmia tiedon menemisestä tietokantaan, mutta perusust tulostus lause koodissa auttoivat vikojen selvittelyssä. Myös selaimen kehitystyökalut olivat käytössä. Pelkästään status koodeista pystytään päättelemään, oliko kysely onnistunut, tai tuliko tietokannan päässä jotain virhettä. Spread-operaattori oli myös syntaksellisesti hieman hämmentävä. Toisaalta jos jokainen tieto olisi pitänyt kirjoittaa käsin, niin ymmärrän miksi tätä syntaksi käytetään. Tällä tavalla saadaan syötettyä koko oli jo kerralla. 

## Backendin testaus

* Kehityshaara
* Kehitys monella koneella

## Express.js Backend

Thunderclient


## React Frontend


# Ongelmia ja ratkaisuja ongelmiin
