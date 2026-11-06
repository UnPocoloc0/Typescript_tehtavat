# Simon harjoitustyön blogi

## Git
Olen kurssin aikana pitänyt kahta Git-rrepositiota yllä. Aiemmilla kursseilla ongelmana on ollut koodin hajaantuminen moneen eri paikkoihin ja projekteihin, jolloin toimivien mallien löytäminen ja vertailu on ollut hankalaa. Tällä kurssilla tein harjoitustyötä samaan repositioon,  jossa sijaitsevat kurssin muutkin viikkotehtävät. Versionhallinnasta on tässä vaiheessa opintoja tullut jo hyvä ystävä, enkä voi kuvitellakaan mitään ohjelmointiin liittyvää tehtävää, ilman että versionhallinta on tukemassa työskentelyä. Koska tallennan kehitystyötä melko pienillä inkrementeillä, niin tämä poistaa tiettyä stressiä, jos jokin asia menee pahasti vikaan. Pahimmassakin tapauksessa menetän noin 10 minuutin työn, joka on nopea paikata tarvittaessa. 

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

Ensimmäisenä tehtävänä oli tuoda käyttöön mysql2, joka tehtiin db.ts-tiedostossa. Samassa tiedostossa otettiin käyttöön dotenv, jonka avulla tietokantayhteyden kredentiaalit voidaan lukea  konfiguraatiotiedostosta. Luo luo ympäristö muuttujille oma yhteys allas, jonka avulla SQL-kyselyiden tekeminen oli jatkossa kätevämpää. Tähän jouduttiin antamaan vaihtoehtoisetkti sen takia, jos yhteys ympäristö muuttujien avulla ei jostain syystä olisi onnistunut. Kuitenkin pyrittiin ensisijaisesti käyttämään konfiguraatio tiedoston kredentiaaleja. Näiden määritysten jälkeen tietokantayhteyden pitäisi toimia. 


* Kehityshaara
* Kehitys monella koneella

## Express.js Backend

Thunderclient


## React Frontend

