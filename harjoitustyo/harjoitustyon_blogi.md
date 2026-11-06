# Simon harjoitustyön blogi

## Git
Olen kurssin aikana pitänyt kahta Git-repositiota yllä. Aiemmilla kursseilla
ongelmana on ollut koodin hajaantuminen moneen eri paikkoihin ja projekteihin,
jolloin toimivien mallien löytäminen ja vertailu on ollut hankalaa. Tällä
kurssilla tein harjoitustyötä samaan repositioon,  jossa sijaitsevat kurssin
muutkin viikkotehtävät. Versionhallinnasta on tässä vaiheessa opintoja tullut jo
hyvä ystävä, enkä voi kuvitellakaan mitään ohjelmointiin liittyvää tehtävää,
ilman että versionhallinta on tukemassa työskentelyä. Koska tallennan
kehitystyötä melko pienillä inkrementeillä, niin tämä poistaa tiettyä stressiä,
jos jokin asia menee pahasti vikaan. Pahimmassakin tapauksessa menetän noin 10
minuutin työn, joka on nopea paikata tarvittaessa. Gitin peruskäytön jälkeen
opettelin samalla kehityshaarojen käyttöä. Kehityshaaraa en puskenut
etäpalvelimelle asti, mutta tein siellä kehitystä ja yhdistin sen aina aika
ajoin päähaaraan. Jos tein kehitystä muilla koneilla, niin silloin pidin
kehityksen pelkästään main-haarassa. Kehityshaarat on hyvä ottaa haltuun, jotta
pystytään riskittömästi kokeilemaan asioita rikkomatta pääkehityshaaraa. 

Kokonaisen Full stack-sovelluksen tekeminen vaikutti aluksi melko abstraktilta,
koska tällä kurssilla oppimiskäyrä on hyvin jyrkkä ja käytettäviä teknologioita
ja kehikoita on lukematon määrä. Yritin aluksi tehdä mielessäni hyvin karkeaa
jaottelua tulevista työvaiheista: mitkä asiat liittyvät tietokantaan ja
taustapalveluihin, mitkä taas liittyvät enemmän käyttöliittymän ja siinä
tapahtuvaan tilanhallintaan. Tämä karkea jaottelu auttoi luomaan edes
jonkinlaisen tiekartan tehtävän suorittamiselle. Toin tehtävänannon txt-muodossa
projektiin mukaan ja käytin tätä itselleni vaatimusmäärittelynä. Tästäkin on
muodostunut itselleni tapa, eli tiettyjä tärkeitä dokumentteja on järkevää
kuljettaa projektin mukana, jolloin sitä ei tarvitse etsiä tietokoneen
resurssienhallinnasta. Lisäksi nämä txt- ja MD-dokumentit pysyvät aina
ajantasalla. 

Tehtävässä oli annettu esitietoja, joita urheilijasta tulisi löytää. Tämä toimii
hyvänä ohjeena tietokannan muodostamiselle ja siitä löytyville kentille. Käytän
monia käyttöjärjestelmiä, mutta eniten kuitenkin Macia. Vaikka Koodasin
itsekseni, pyrin vaihtamaan työasemaa päivittäin. Näin pystyn simuloimaan
tiimityöskentelyä, ja miten versionhallinta toimisi tiimin kanssa. Koska
konfiguraatiotiedostot eivät mene versionhallintaan, eivätkä myöskään
kehitysaikaiset riippuvuudet. Alussa jouduin näitä riippuvuuksia  konfiguroimaan
eri koneille, koska näitä ei ole mitään järkeä viedä version hallintaan. Pikemminkin ne pystytään asentamaan jokaisen kehityskoneelle erikseen. Asioiden toistaminen on kuitenkin tässä ainoastaan hyvä asia, jolloin asiat eivät paremmin selkärankaan.
Koneillani pyörii MysSql tietokantamoottorina, ja graafisena tietokannan
ohjaimena käytin DataGrip-sovellusta, koska pidän JetBrains-IDE:n visuaalisesta
ilmeestä hyvin paljon. Tässä on myös tuttuuselementti, eli kaikki JetBrainsin
kehitysympäristöt näyttävät hyvin samankaltaisilta, jolloin työn aloittaminen on
kivutttomampaa. Samat kyselyt ja logiikka toimisi MariaDB:n, Heidi SQL:n kanssa, mutta Windowsin käyttämäminen kehityskoneena on paljon tahmaisempaa. 

## Tietokanta ja sen luominen
Tein tietokannanluontiskriptin, joka loi tietokannan `urheilija_db` ja sinne
`urheilijat`-taulun ja tauluun tehtävässä vaaditut sarakkeet. ID:n luomisesta tietokanta
huolehtii itse, mutta muut tiedot pitää syöttää. Tässä oli jonkun verran
ongelmia projektin myöhemmissä vaiheissa, esimerkiksi ID:llä lisätessa
poistaessa. Tämä liittyi esim. Front endin puolella olevaan addUrheilija-metodiin.

Mietin, olisiko urheilijan syntymäaikaan riittänyt
pelkästään vuosiluku, jolloin olisin voinut käsitellä yksinkertaisempaa
tietotyyppiä, kuten numeroa päivämäärän sijasta. Urheilijaa lisätessä tiedot eivät
välttämättä päivityneet kantaan, ellei syntymäaika ollut juuri oikeassa muodossa. Myös aikaleiman automaattinen lisääminen päivämäärään teki kannan päivittämisen mahdottomaksi. Koska tietoa on muunnetaan olioista tekstiksi, näitä ihmeellisiä
muunnosvirheitä voi ilmetä myöhemmissä kehitysvaiheissa. 

Tietokannan pystyttämisen jälkeen loin
käyttäjä `user` salasanalla `user1`. Eli ohjenuorana tietoturvaan oli, että mitään järjestelmänvalvojan oikeuksia ei tietokantaan anneta. Tässä tapauksessa riittää pelkät
CRUD-ominaisuuddet ja nämäkin vain tietyn tietokannan `urheilijat`-taulussa. Annoin aluksi ehkä liian lyhyitä
rajoituksia nimille ja etenkin URL osoitteelle, joka tarvitsi mahdollisuuden
olla huomattavasti pidempi. Nyt nimillä ja osoitteilla on riittävästi merkkejä varattu, kuten URL-osoitteella mahdollisuus olla 255 merkkiä pitkä.  Alkuun pohdin myös
saavutuksille oman taulun tekemistä, koska yhdellä urheilijalla voi olla monia
saavutuksia. Tämän jätin kommentteihin vertailua helpottamaan, mutta nyt
tietokannan rakenne jätettiin mahdollisimman yksinkertaiseksi. Useampi saavutus voidaan pätkiä muilla tavoilla osiin. 

## Arkkitehtuurimalli
Tämä projekti on ollut aiempia koulun projekteja laajempi arkkitehtuuriltaan, joten
hyvä suunnittelu ja käsitys projektin rakenteesta ylätasolla auttoi. Paljon hahmottamista vaikeuttaa Web1-kurssin puuttuminen, sekä perusteknologioidenkin harjoitteluun pitäisi varata vielä paljon aikaa ennen kehysten käyttämistä. Sovelluksen
arkkitehtuuri jaettiin kolmeen erilliseen osaan, eli tietokantaan, ja sitä
ohjaavan välikerrokseen, sekä käyttäjälle näkyvään käyttöliittymään. Middleware
toteutettiin Express-kehyksellä, koska sitä käytettiin kurssilla ja se on
hyvin käytetty tapa hallinnoida SQL-kyselyitä middlewaressa. Käyttöliittymä pyrittiin
toteuttamaan Reactilla ja sovelluksen globaali tila Context-Apilla. Bootstrap oli tarkoitus ottaa käyttöön myös, jotta käyttöliittymästä saataisiin responsiivinen. Lopullisesta versiosta
tämä käyttöliittymän tyylittely/ viilaus on jätetty ajanpuutteen vuoksi pois. Tämä olisi
kuitenkin hyvä vapaa-ajan projekti tehdä myöhemmin loppuun. Tällä hetkellä pidän
tärkeämpänä, että perus SQL-kyselyt toimivat ja yhteystieto tietokantaan toimii käyttöliittymästä,
sekä sovelluksen kokonaistilan hallinta. Esteettisesti miellyttävämpi
käyttöliittymä ei mielestäni tuo juurikaan lisää tuohon logiikkapuoleen, ja
käyttöliittymien suunnittelua ja responsiivisuutta on sivuttu muilla koulun
kursseilla aiemmin. 


### Ympäristön alustus

Aluksi oli tärkeä saada kehitysympäristö pystyyn. Tietoturva otettiin huomioon
ympäristön avustuksesta niin, että tietokanta yhteys otettiin erilliseen
.env-tiedostoon. Lisäksi luotiin gitignore- sääntö, että tätä tiedostoa ei koskaan vielä
versionhallintaan mukaan. Suuret node modules -riippuvuudet jätettiin luonnollisesti versionhallinasta myös pois. 

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
* Typescript valittiin ohjelmointikieleksi, koska tämä on tyyppiturvallisempi
  kieli kuin javascript ja tämä on ollut Web2-kurssin oleellinen kieli
  

## Kehitysaikaiset riippuvuudet

Avuksi piti asentaa kehitystyökalut komennolla:

```
npm install -D typescript ts-node nodemon @types/node @types/express @types/cors
```
Nodemonin hyvä puoli oli siinä, että serveriä ei tarvitse aina käynnistää
uudelleen, kun koodin tulee jotain muutoksia. Tämä on siis näppärä tapa hallita
muutoksia reaaliajassa. Package.json-tiedostoon voidaan kirjoittaa projektin
tarvitsemat riippuvuudet, näissä on mukana versionumerot. Jonkun verran oli
ongelmia sopivan version löytymisessä, mutta tiettyjä legacy-lippuja käyttämällä
riippuvuudet saatiin kuntoon. Myös scripts-osioon voidaan kirjoittaa haluttu
käsky, jolloin ohjelman ajaminen onnistuu helposti muistettavalla komennolla,
kuten `npm run dev`. 

tsconfig-tiedosto asennettiin komennolla.
```
npx tsc --init
```

Ensimmäisenä tehtävänä oli tuoda käyttöön mysql2, joka tehtiin
db.ts-tiedostossa. Samassa tiedostossa otettiin käyttöön dotenv, jonka avulla
tietokantayhteyden kredentiaalit voidaan lukea konfiguraatiotiedostosta. Luotiin
ympäristömuuttujille oma yhteysallas, jonka avulla SQL-kyselyiden tekeminen oli
jatkossa kätevämpää. Tähän jouduttiin antamaan vaihtoehtoisesti sen takia, jos
tietokantayhteys ympäristömuuttujien avulla ei jostain syystä olisi onnistunut.
Kuitenkin pyrittiin ensisijaisesti käyttämään konfiguraatiotiedoston
kredentiaaleja, eli ts. kehityskoneen ympäristömuuttujia. Näiden määritysten
jälkeen tietokantayhteyden pitäisi toimia. 

Koska TS on tyypitetty kieli, niin urheilija voidaan mallintaa omalla oliolla,
joka pitää sisällään kaikki urheilijan liittyvät tiedot. Tämä dataluokka/
rajapinta helpottaa kokonaisen olion tietojen hakemista ja päivittämistä
myöhemmin. Nämä luokan ominaisuudet vastaava tietokannassa olevia taulun
sarakkeita. Tätä mallia käytetään myöhemmin, kun palautetaan urheilijan tietoja,
tai päivitetään niitä. Kaikki luokan ominaisuudet voidaan asettaaa, mutta
ID-kentän tietokanta generoi automaattisesti primary keyn avulla. Tässä
vaiheessa serveri pyörii paikallisesti osoitteessa 3 000 ilman virheitä, data
mallin urheilijaa varten oli valmis ja tarvittavat kehitys aikaiset riippuvuudet
asennettu. 

## Middleware ja Express-tyyppinen palvelin
Seuraavaksi alkoi varsinainen Middlewaren rakentaminen, eli kuinka saadaan
välitettyä erilaisia http-metodeja tietokantaan asti. Tämä oli mielestäni
järkevä tapa edetä, koska eihän ole mitään järkeä kutsua sellaisia funktioita,
joiden toiminnallisuutta ei ole vielä olemassa. Siksi etenin yksi metodi
kerrallaan, joita tallensin niiden valmistumisen jälkeen ahkerasti versionhallintaan.   

Riippuvuudet back endiin saatiin kätevästi yhdellä komennolla:
```
typescript, ts-node, @types/express, @types/node, @types/cors
````

Tämän jälkeen näitä komponentteja ja pystytään tuomaan taustajärjestelmään
mukaan. Kirjoitin Back endiin tyhjät metodirungot seuraaville metodeille: `GET,
GET by ID, POST, PUT ja DELETE`. Tavoitteena oli täydellisen
CRUD-toiminnallisuuden tekeminen sovellukseen, vaikka käyttöliittymä jäisikin vaillinaiseksi. Express otettiin omaan muuttujan
talteen, jonka jälkeen se tarjoaa hyödyllisiä metodeita, kuten json-muotoisen
datan muuttaminen objektiksi. Metodit muistuttavat rakenteeltaan toisiaan, eli ne
ovat kaikki asynkronisia. Tämä tarkoittaa sitä, että metodin suoritus
keskeytyy, kunnes tietokannasta tulee vastaus. Se ei jää siis varaamaan
resursseja turhaan. Pyyntöä ja vastausta varten on omat muuttujat. Suurimmassa
osassa metodeita käytetään ID-parametria, jolla SQL-kysely voidaan kohdentaa
koskemaan jotain tiettyä urheilijaa. Kaikkiin metodeihin tehtiin
Try-Catch-lohkot. Vastaus tuottaa aina json-muotoista dataa, joten tämä
palautetaan aina, olipa kyseessä onnistunutta epäonnistunut kyselen. 

`GetUrheilijat`-metodi. Tähän riittää pelkkä URL-osoite, koska haetaan taulusta
kaikki tietueet. Lisäysmetodi toteutettiin melko kevyesti, eli tiedoksi
riittivät etu- ja sukunimet. Uuden urheilijan tiedot pystytään lukemaan vasta
vastauksen sanomasta, ja tässä vaiheessa tuo urheilija-rajapinnan tekeminen
alkaa maksamaan itseään takaisin. Nyt pystytään kyselyssä kysymysmerkin tilalle
sijoittumaan kokonainen uusi urheilija-olio. Valikoiessa minimi tietoja, tässä
unohtui nyt operaation käyttäminen, joka esti urheilijan päivittämisen. Eli
pieni !-merkin puuttuminen aiheutti harmaita hiuksia. Delete-metodi oli
toteutukseltaan siinä mielessä yksinkertaisempi, koska sen ei tarvitse palauttaa
mitään. Toki poistettavaa urheilijan ID mikä on. Päivitys-metodi oli monessakin
mielessä hankala, koska tässä sotkee tietokannan automaattisesti luotu ID, sekä
urheilijan syntymävuoden käsittely DATE-tyyppisenä. Myöhemmissä vaiheessa
syntymävuoden ollessa väärässä muodossa, yksistään tämä esti tietoihin
päivittämiseen kantaan. 

Syntakssellisesti tässä vaiheessa oli piilotettu tieto. Eli, kun käytetään
yhteys allasta, niin kyselyt tuottavat taulukon, jossa on varsinainen data
ensimmäisessä indeksissä ja metadata toisessa indeksissä. Kysymysmerkin käyttö
kyselyssä tarkoittaa paikan pitäjää, eli tähän laitetaan haluttu tieto. Useassa
tapauksessa tämä oli juuri tuo urheilijan ID-tunnus. Haettava palvelin on
sinänsä aivan sama kuin aiemminkin, mutta nyt parametreihin tarvitaan tämä
urheilijan yksilöivä tieto. Jonkun verran oli ongelmia tiedon menemisestä
tietokantaan, mutta perusust tulostus lause koodissa auttoivat vikojen
selvittelyssä. Myös selaimen kehitystyökalut olivat käytössä. Pelkästään status
koodeista pystytään päättelemään, oliko kysely onnistunut, tai tuliko
tietokannan päässä jotain virhettä. Spread-operaattori oli myös syntaksellisesti
hieman hämmentävä. Toisaalta jos jokainen tieto olisi pitänyt kirjoittaa käsin,
niin ymmärrän miksi tätä syntaksi käytetään. Tällä tavalla saadaan syötettyä
koko oli jo kerralla. 

## Backendin testaus
Kun metodit valmistuivat yksi kerrallaan, testasin niitä VSCodeen integroidulla
Thunder Client-sovelluksella. Tämä toimii hyvin samalla tavalla kuin
Postman-sovellus, mutta Thunder Clientin kanssa ei tarvitse vaihtaa
kehitysympäristöstä mihinkään muualle. Metodista riippumatta tarvitaan Headers:n
asetus: content-type application json, koska pyyntöjä ja vastauksia käsitellään
json-muodossa. POST- ja PUT -metodit tarvitsevat myös tietojen päivittämistä
varten bodyn rungon JSON-muodossa. Kun yhteys back endiin saatiin toimimaan
siirryttiin tekemään front end-puolta.   


## React Frontend

Front end rakennettiin Viten avulla, tämä luo automaattisesti projektiin tietyt
template-koodit, linttaukset, CSS-tiedostot jne. Front-puolelle jouduttiin
asentamaan oma node-modules, koska tässä tarvitaan erilaisia määrityksiä kuin
taustapalveluissa. Kaikki front-puoleen liittyvät asiat laitettiin omaan
hakemistoon, jotta projektia on helpompi hahmottaa kehityksen aikana. Kaikki
lähdekoodi kirjoitettiin hyvien käytänteiden mukaisesti src-kansioon. 

Kaikki tietokantaan tehtävät kutsut eristettiin omaan palvelukerrokseensa. Jotka
kirjoitusvirheeltä täytettäisiin pitkät URL osoitteet otettiin muuttujiin
talteen. Näin itse kutsut ovat myös helpommin luettavia. Tässä olisin taksin
kanssa myös hieman ongelmia, eli ellei metodia olla erikseen määritetty, se
tekee oletuksena GET-pyynnön. Tässä kerroksessa tapahtuu myös muutoksia
JSON-muodosta oliomuotoon, jolloin tuli virheitä. Koska pelkästä status koodi ei
aina kertonut virheen syytä, niin jouduttiin tuosta konsoliin virheen
aiheuttaja, jolloin päästiin paremmin selville virheen syystä. 

Melkein kaikki
metallit tässä palvelu kerroksessa palautuvat json-muotoista dataa,  paitsi
delete-metodi. Hankalin asia oli uuden urheilijanliseen. Ongelmana oli, että
tietokanta luo automaattisen ID-kentän, joten tämä piti pystyä jättää
huomioimatta parametreja annettaessa. Koska urheilija-tyyppi tuotiin tähän
kerrokseen mukaan, funktio palauttavat tämän tyypin tietoja. Jos on kyseessä
kaikki urheilijat, niin Promise on Urheilijat-taulukko, palautetaan yhden
urheilijan tiedot. 


# Ongelmia ja ratkaisuja ongelmiin

# Bootstrap ja CSS-muotoilut
