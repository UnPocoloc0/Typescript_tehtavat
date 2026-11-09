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
opettelin kurssin aikana kehityshaarojen käyttöä. Kehityshaaraa en puskenut
etäpalvelimelle asti, mutta tein siellä kehitystä ja yhdistin sen aina aika
ajoin päähaaraan. Jos tein kehitystä muilla koneilla, niin silloin pidin
kehityksen pelkästään main-haarassa. Kehityshaarat on hyvä ottaa haltuun, jotta
pystytään riskittömästi kokeilemaan uusia sioita rikkomatta toimivaa sovellusta. 

## Tehtävänanto ja vaatimusmäärittely
Kokonaisen Full stack-sovelluksen tekeminen vaikutti aluksi melko abstraktilta,
koska tällä kurssilla oppimiskäyrä on hyvin jyrkkä ja käytettäviä teknologioita
ja kehikoita on niin paljon. Yritin aluksi tehdä mielessäni hyvin karkeaa
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
tiimityöskentelyä, ja miten versionhallinta toimisi tiimin kanssa. Jonkun verran
oli ongelmia konfiguraatioden kanssa, koska konfiguraatiotiedostot eivät mene
versionhallintaan, eivätkä myöskään kehitysaikaiset riippuvuudet. Alussa jouduin
näitä riippuvuuksia  konfiguroimaan eri koneille, koska näitä ei ole mitään
järkeä viedä versionhallintaan. Pikemminkin ne pystytään asentamaan jokaisen
kehityskoneelle erikseen Etenkin node-modules -kirjasto vie paljon tilaa, joten
tällainen tukkisi GitHubin nopeasti. Asioiden toistaminen on kuitenkin tässä
ainoastaan hyvä asia, jolloin asentamiseen liittyvät asiat menevät  paremmin
selkärankaan. Koneillani pyörii MysSql tietokantamoottorina, ja graafisena
tietokannan ohjaimena käytin DataGrip-sovellusta, koska pidän JetBrains-IDE:n
visuaalisesta ilmeestä hyvin paljon. Tässä on myös tuttuuselementti, eli kaikki
JetBrainsin kehitysympäristöt näyttävät hyvin samankaltaisilta, jolloin työn
aloittaminen on kivutttomampaa. Samat kyselyt ja logiikka toimisi MariaDB:n,
Heidi SQL:n kanssa, mutta Windowsin käyttämäminen kehityskoneena on itselläni
paljon tahmaisempaa. 

## Tietokanta ja sen luominen
Tein tietokannanluontiskriptin, joka loi tietokannan `urheilija_db` ja sinne
`urheilijat`-taulun ja tauluun tehtävässä vaaditut sarakkeet. Sarakkeet ovat
urheilijaan liittyviä ominaisuuksia, kuten nimi ja laji. ID:n luomisesta
tietokanta huolehtii itse, mutta muut tiedot pitää syöttää. Tässä oli jonkun
verran ongelmia projektin myöhemmissä vaiheissa, esimerkiksi ID:llä lisätessa
poistaessa. Tämä liittyi esim. Front endin puolella olevaan
addUrheilija-metodiin.

Tietokannan pystyttämisen jälkeen loin käyttäjän `user` salasanalla `user1`. Eli
ohjenuorana tietoturvaan oli, että mitään järjestelmänvalvojan oikeuksia ei
tietokantaan anneta. Tässä tapauksessa riittää pelkät CRUD-ominaisuudet ja
nämäkin vain tämän tietyn tietokannan `urheilijat`-tauluun. Annoin aluksi ehkä
liian lyhyitä rajoituksia nimille ja etenkin URL osoitteelle, joka tarvitsi
mahdollisuuden olla huomattavasti pidempi. Nyt nimille ja osoitteille on varattu
riittävästi merkkejä, kuten esim. URL-osoitteella mahdollisuus olla 255 merkkiä
pitkä.  Alkuun pohdin myös saavutuksille oman taulun tekemistä, koska yhdellä
urheilijalla voi olla monia saavutuksia. Tämän jätin luontiskriptiin
kommentteihin vertailua helpottamaan, mutta nyt tietokannan rakenne jätettiin
mahdollisimman yksinkertaiseksi. Jos urheilijalla on useampi saavutus, niin tämä
voidaan pätkiä muilla tavoilla osiin. 

## Arkkitehtuurimalli
Tämä projekti on ollut aiempia koulun projekteja laajempi arkkitehtuuriltaan,
joten hyvä suunnittelu ja käsitys projektin rakenteesta ylätasolla oli
välttämätöntä. Oikeastaan projektin alussa ei ollut mitään käsitystä tehtävän
todellisesta vaikeudesta. Paljon omaa hahmottamista vaikeuttaa Web1-kurssin
puuttuminen. Myös Web-kehitykseen liittyvien perusteknologioidenkin
harjoitteluun pitäisi varata vielä paljon aikaa. Tämän jälkeen erilaisten
frameworkien käyttäminen olisi helpompaa. 

Sovelluksen arkkitehtuuri jaettiin kolmeen erilliseen osaan, eli tietokantaan,
ja sitä ohjaavan välikerrokseen, sekä käyttäjälle näkyvään käyttöliittymään.
Middleware toteutettiin Express-kehyksellä, koska sitä käytettiin kurssilla ja
se on hyvin käytetty tapa hallinnoida SQL-kyselyitä. Kerrokset pyrittiin
pitämään mahdollisimman puhtaana. Tämä tarkoittaa sitä, että esim. Middleware
käyttää puhdasta typescriptia, eikä tiedä muiden kerrosten toteutuksesta mitään.
Se toimii vain palvelukerroksena, joka tekee tietokantaan kyselyitä.

Käyttöliittymä pyrittiin toteuttamaan Reactilla ja sovelluksen globaali
tilanhallinta Context-Apilla. Bootstrap-kehys oli tarkoitus ottaa käyttöön myös,
jotta käyttöliittymästä saataisiin responsiivinen. Lopullisesta versiosta tämä
käyttöliittymän tyylittely/ viilaus jätettiin ajanpuutteen vuoksi pois. Tämä
olisi kuitenkin hyvä vapaa-ajan projekti tehdä myöhemmin loppuun. Tällä hetkellä
pidän tärkeämpänä, että perus SQL-kyselyt toimivat ja yhteys tietokantaan toimii
käyttöliittymästä. Tärkeä oppi on myös globaali tilankäsittely ilman, että tätä
joudutaan ketjuttamaan komponenttien läpi komponenttipuussa.  Esteettisesti
miellyttävämpi käyttöliittymä ei mielestäni tuo juurikaan lisää tuohon
logiikkapuoleen, ja käyttöliittymien suunnittelua ja responsiivisuutta on
sivuttu muilla koulun kursseilla aiemmin. 

### Ympäristön alustus

Aluksi oli tärkeä saada kehitysympäristö pystyyn. Tietoturva otettiin huomioon
ympäristön alustuksessa niin, että tietokantayhteys otettiin erilliseen
`.env`-tiedostoon. Lisäksi luotiin gitignore- sääntö, että tätä
konfiguraatiotiedostoa ei koskaan viedä versionhallintaan mukaan. Suuret node
modules -riippuvuudet jätettiin luonnollisesti versionhallinasta myös pois.
Näillä kredentiaaleilla saadaan yhteys tietokantaan ja tämän jälkeen voidaan
käydä rakentamaan taustapalvelua.

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
  kieli kuin javascript ja tämä on ollut Web2-kurssin oleellisin kieli
  

## Kehitysaikaiset riippuvuudet

Aluksi piti asentaa kehitystyökalut ja riippuvuudet komennolla:

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

Typescriptin asetustiedosto, eli `tsconfig`-tiedosto asennettiin komennolla.
```
npx tsc --init
```

Tämän jälkeen näitä komponentteja ja pystytään tuomaan taustajärjestelmään
mukaan.

## Yhteysallas
Ensimmäisenä tehtävänä oli tuoda back endissa käyttöön `mysql2`, jotta
yhteysaltaan avulla voidaan tehdä kyselyjä tietokantaan. Yhteysallas on parempi
vaihtoehto kyselyjen tekemiseen, koska allas pysyy koko ajan käynnissä.
Asiakkaita palvellaa ja yhteydet vapautetaan tämän jälkeen takaisin käyttöön.
Yksittäisten kyselyiden ongelma on se, että yhtyes kantaan joudutaan jatkuvasti
avaamaan ja sulkemaan. Samassa tiedostossa otettiin käyttöön dotenv, jonka
avulla tietokantayhteyden kredentiaalit voidaan lukea suoraan
konfiguraatiotiedostosta. Luotiin konekohtaisille ympäristömuuttujille oma
yhteysallas, jotta SQL-kyselyiden tekeminen olisi jatkossa kätevämpää. Tähän
jouduttiin antamaan myös vaihtoehtoiset kirjautumistavat sen takia, jos
tietokantayhteys ympäristömuuttujien avulla ei jostain syystä olisi onnistunut.
Kuitenkin pyrittiin ensisijaisesti käyttämään konfiguraatiotiedoston
kredentiaaleja, eli ts. kehityskoneen ympäristömuuttujia. Näiden
perusmääritysten jälkeen tietokantayhteyden pitäisi toimia oikein. Koska käytin
useita kehityskoneita, niin nämä kredentiaalit piti konfiguroida luonnollisesti
jokaisella koneella erikseen.

## Typescript
Koska TS on tyypitetty kieli, niin urheilija voidaan mallintaa omalla oliolla,
joka pitää sisällään kaikki urheilijan liittyvät tiedot. Tämä dataluokka/
rajapinta helpottaa kokonaisen olion tietojen hakemista ja urheilijan tietojen
päivittämistä myöhemmin. Nämä Urheilija-rajapinnan ominaisuudet vastaavat myös
tietokannassa olevia taulun sarakkeita. Tätä mallia käytetään myöhemmin, kun
palautetaan urheilijan tietoja, tai päivitetään niitä. Kaikki luokan
ominaisuudet voidaan asettaaa myöhemmin käyttöliittymässä, mutta ID-kentän
tietokanta generoi automaattisesti primary keyn avulla. Tämän vuoksi ID-kenttä
jätettiin valinnaiseksi, eli sitä ei ole pakko syöttää. Esim. urheilijaa
lisättäessä ID-kenttää ei vielä ole olemassakaan, koska tämä generoidaan
luontihetkellä. Jos ei oltaisi käytetty valinnaista olion ominaisuuksissa, niin
ohjelma kaatuisi. Ainoastaan etu- ja sukunimet määriteltiin pakollisiksi
tiedoiksi. Tässä vaiheessa kehitystä serveri pyörii paikallisesti osoitteessa 3
000 ilman virheitä, datamalli urheilijaa varten oli valmis ja tarvittavat
kehitysaikaiset riippuvuudet asennettu. 

## Middleware ja Express-tyyppinen palvelin
Seuraavaksi alkoi varsinainen Middlewaren rakentaminen, eli kuinka saadaan
välitettyä erilaisia http-metodeja tietokantaan asti. Suurimpana tavoitteeta oli
rakentaa täydellinen CRUD-toiminnallisuus, jonka avulla voidaan hakea
urheilijoita, muokata, päivitä ja poistaa kannassa olevaa urheilijalistaa. Tämä
oli mielestäni järkevä tapa edetä, koska eihän ole mitään järkeä kutsua
sellaisia funktioita, joiden toiminnallisuutta ei ole vielä olemassa. Siksi
eteninaina yksi metodi kerrallaan ja tallensin edistymistä versionhallintaan ahkerasti.   

Kirjoitin Back endiin tyhjät metodirungot seuraaville metodeille: `GET, GET by
ID, POST, PUT ja DELETE`. Tavoitteena oli täydellisen CRUD-toiminnallisuuden
tekeminen sovellukseen, vaikka käyttöliittymä jäisikin ulkoasultaan
vaillinaiseksi. Express otettiin omaan muuttujan talteen. Tämän jälkeen 
express-ilmentymä tarjoaa  hyödyllisiä metodeita käyttöön, kuten json-muotoisen
datan muuttaminen objektiksi. Kaikki http-metodit muistuttavat rakenteeltaan
toisiaan, eli ne ovat esim. kaikki asynkronisia. Tämä tarkoittaa sitä, että
metodin suoritus keskeytyy, kunnes tietokannasta tulee vastaus. Se ei jää siis
varaamaan resursseja turhaan, joka aiheuttaisi palvelimen "kyykkäämisen".
Pyyntöä ja vastausta varten on omat muuttujat, `req` ja `res`. Suurimmassa
osassa metodeita käytetään myös ID-parametria, jolla SQL-kysely voidaan
kohdentaa koskemaan jotain tiettyä urheilijaa. Tämä vastaa tietokannan luomaa
Primary Key-kenttää. Kaikkiin metodeihin tehtiin virheenkäsittelyä varten
erilliset Try-Catch-lohkot. Vastaus tuottaa aina json-muotoista dataa, joten
tämä palautetaan aina, olipa kyseessä onnistunut tai epäonnistunut kysely. 

## Server-luokka
Tähän tiedostoon kirjoitettiin kaikki middlewareen liittyvät asiat.
`GetUrheilijat`-metodi; tähän riittää parametriksi pelkkä URL-osoite, koska
haetaan urheilijat-taulusta kaikki tietueet. Lisäysmetodi toteutettiin melko
kevyesti, eli alkutiedoksi riittivät urheilijasta pelkät etu- ja sukunimet.
Uuden urheilijan tiedot pystytään lukemaan vasta vastauksen sanomasta, ja tässä
vaiheessa aiemmin määritelty urheilija-rajapinta alkaa selkeyttämään koko
sovelluksen arkkitehtuuria. Tämä tekee metodin testaamisesta vähän hankalampaa,
koska nyt pitää antaa kutsun body-osioon kokonainen Urheilija-olio
JSON-muodossa. Koodissa olevassa SQL-kyselyssä kysymysmerkin tilalle sijoitetaan
kokonainen uusi urheilija-olio. Eli koodissa ja kyselyssä käsitellään samaa
Urheilijaa, mutta eri muodoissa (JSON ja typescript-olio). Validoitaessa
urheilijaan liittyviä minimitietoja, tässä unohtui joskus not-operaattori,
joka esti urheilijan päivittämisen. Eli pelkkä pieni !-merkin puuttuminen
saattoi aiheuttaa kyselyn epäonnistumisen. 

`Delete`-metodi oli toteutukseltaan siinä mielessä yksinkertaisempi muihin
metodeihin verrattuna, koska sen ei tarvitse palauttaa mitään. Tässäkin piti
kuitenkin tietää, mikä on poistettavan urheilijan ID. Päivitys, eli `PUT`-metodi
oli monessakin mielessä hankala, koska tässä sotki tietokannan automaattisesti
luotu ID, sekä urheilijan syntymävuoden käsittely DATE-tyyppisenä. Myöhemmissä
vaiheessa syntymävuoden ollessa väärässä muodossa, yksistään tämä esti tietojen
päivittymisen kantaan. Aikaleimaan tuli liian tarkkaa dataa mukaan, jolloin
tietokanta ei hyväksynyt tätä tarkkaa muotoa.  

Syntaksellisesti tässä vaiheessa oli hankalaa hahmottaa typescriptin piilotettu
tieto. Eli, kun käytetään esim. yhteysallasta, niin kyselyt tuottavat taulukon,
jossa on varsinainen data ensimmäisessä indeksissä ja metadata toisessa
indeksissä. Kysymysmerkin käyttö kyselyssä tarkoittaa paikanpitäjää, eli tämän
kysymysmerkin tilalle laitetaan jokin haluttu tieto. Useassa tapauksessa tämä
oli juuri tuo urheilijan ID-tunnus. Haettava palvelin on sinänsä aivan sama kuin
aiemminkin, mutta nyt parametreihin tarvitaan tämä urheilijan yksilöivä tieto.

Jonkun verran oli ongelmia tiedon menemisestä tietokantaan, mutta
perusustulostuslauseet koodissa auttoivat vikojen selvittelyssä. Myös selaimen
kehitystyökalut olivat ahkerassa käytössä. Pelkästään statuskoodeista pystytään
päättelemään, oliko kysely onnistunut, tai tuliko tietokannan päässä jotain
virhettä jne. Spread-operaattori oli myös syntaksellisesti hieman hämmentävä.
Toisaalta jos jokainen tieto olisi pitänyt kirjoittaa käsin, niin ymmärrän miksi
tätä syntaksia käytetään. Tällä tavalla saadaan syötettyä koko olion tiedot
kerralla. Eli tämä liittyi olion ominaisuuksien ja tietokannan taulun kenttien
vastaavuuteen, joka pystytään spread-operaattorilla automatisoimaan.

## Backendin testaus
Kun metodit valmistuivat yksi kerrallaan, testasin niitä VSCodeen integroidulla
Thunder Client-sovelluksella. Tämä toimii hyvin samalla tavalla kuin esim.
Postman-sovellus, mutta Thunder Clientin kanssa ei tarvitse vaihtaa
kehitysympäristöstä mihinkään muualle. Metodista riippumatta tässä aina mukaan
tarvitaan Headers:n asetus: `content-type application json`, koska pyyntöjä ja
vastauksia käsitellään json-muodossa. POST- ja PUT -metodit tarvitsevat myös
tietojen päivittämistä varten bodyn rungon JSON-muodossa. Kun yhteys back endiin
saatiin toimimaan Thunder Clientin avulla, siirryttiin tekemään front end-puolta
`REACT`:n avulla.   


## React Frontend

Front end rakennettiin Viten avulla, tämä luo automaattisesti projektiin tietyt
template-koodit, linttaukset, CSS-tiedostot jne. Front-puolelle jouduttiin
asentamaan oma node-modules, koska tässä tarvitaan erilaisia määrityksiä kuin
back endin taustapalveluissa. Kaikki front-puoleen liittyvät asiat laitettiin
omaan hakemistoon, jotta koko projektia on helpompi hahmottaa kehityksen aikana.
Kaikki lähdekoodi kirjoitettiin hyvien käytänteiden mukaisesti src-kansioon. 

## Front end kansiorakenne
`services/ athleteService.ts`- tekee kutsuja palvelimelle 
`context/AthleteContext.ts`- tässä on sovelluksen globaali tila 
`components/Urheilijalist.tsx`    - näissä on sekaisin html-tyylistä koodia ja
typescript-logiikkaa.  

Kaikki tietokantaan tehtävät kutsut eristettiin omaan palvelukerrokseensa. Jotta
kirjoitusvirheiltä vältyttäisiin, pitkä URL-osoite otettiin muuttujaan talteen.
Monesti pienikin virhe osoitteessa aiheuttaa kyselyn epäonnistumisen, muuttujan
avulla  myös itse kutsut ovat  helpommin luettavia, koska parametrina oleva arvo
on lyhyempi. Tässä kohtaa oli syntaksin kanssa myös hieman ongelmia, eli esim.
ellei http-metodia olla erikseen määritetty, se tekee oletuksena GET-pyynnön.
Tässä kerroksessa tapahtuu myös muutoksia JSON-muodosta oliomuotoon, jolloin voi
tulla helposti erilaisia virheitä. Koska pelkästä statuskoodi ei aina kertonut
virheen syytä, niin jouduttiin tulostamaan konsoliin virheen aiheuttaja, jolloin
päästiin paremmin selville virheen syystä. 

## Palvelukerros AthleteServices
Tietokannasta palautuva data menee ensimmäisenä palvelukerroksen läpi. Melkein
kaikki metodit tässä palvelukerroksessa palautuvat json-muotoista dataa, paitsi
delete-metodi, joka ei palauta mitään. Hankalin asia oli uuden urheilijan
lisääminen `ADD`-metodilla: ongelmana oli, että tietokanta luo automaattisen
ID-kentän, joten tämä piti pystyä jättää huomioimatta parametreja annettaessa.
Koska urheilija-tyyppi tuotiin tähän kerrokseen mukaan, funktiot palauttavat
tämän Urheilija-tyypin tietoja. Jos haetaan kaikki urheilijat, niin Promise on
Urheilijat-taulukko, muissa tapauksissa vain palautetaan yhden, halutun ID:n
urheilija-olion tiedot. 

## Tilanhallinta AthleteContext
Valmiit palvelukerroksen metodit tuodaan `AtheletContext`-tiedostoon. Tässä
tiedostossa kootaan asioita yhteen ja hallitaan sovelluksen globaalia tilaa.
Globaalin tilanhallinnan avulla estetään tilan välittäminen käsin komponenttilta
toiselle. Muussa tapauksessa komponentit joutuisivat käsittelemään niille
kuulumatonta tietoa, ja tilanhallinnasta tulisi tällä tavoin raskasta ylläpitää.
Koodi muuttuisi myös paljon sotkuisammaksi ilman Context API:n käyttämistä.
Ongelmia aiheutti etenkin lomakekentän paikallinen tilanhallinta, vaikka
sovelluksen globaalia tilaa hallittiin Context API:n kautta. 

### Rajapintamäärittely

Tehtiin aluksi rajapintamäärittely `ÀthleteContextType`, eli mitä tietoja ja
metodeita Context:sta tarjotaan ulos. Tämä määrittely toimii sopimuksena, eli
tietyt muuttujat ja funktiot pitää löytyä täsmälleen tässä rajapinnassa
esitetyllä tavalla. Tämän jälkeen luotiin Context olio käyttämällä
`createContext`-metodia, johon annetaan juuri luotu rajapinta parametriksi. 

Providerin sisällä kääritään kaikki lapsikomponentit yhteen ja tarjotaan niille
globaali tila.  Lapsikomponentit rendertyvät uudestaan silloin, kun Providerin
tarjoama Context-tila muuttuu. Tässä tapauksessa globaali tila on
Urheilija-olioita sisältävä taulukko. Globaali tila päivittyy kun haetaan
palvelukerroksessa olevalla funktiolla kaikki urheilijat ruudulle. Tilapäivitys
pitää tehdä aina asetusfunktion kautta, jotta React havaitsee muutoksen.
Context-rajapinnassa on vain metodien nimet ja parametrit, mutta varsinainen
määrittely tehdään aina funktionaalisen komponentin sisällä. 

Varsinaiset funktioiden toteutukset tehtiin Providerin sisälle ja funktion nimen
eteen laitettiin handle merkkaamaan, että nyt käsitellään tilanmuutosta. Tämä
kontekstiolion koko tila voidaan lopuksi välittää yksinkertaisella funktiolla
näkyviin muualle, kuten käyttöliittymäkomponenteille. Koska metodeja ketjutetaan
eri tiedostojen kautta, tätä datan virtausta oli hankala hahmottaa ilman
kaavakuvaa. Datan kulku tiivistettynä: Tietokannasta data liikkuu
palveluluokalle, joka välittää sen edelleen Providerille, joka tarjoaa globaalin
tilan käyttöliittymäelementeille erillisen kääremetodin kautta. Tähän
kääremetodiin laitetaan koko sovelluksen tila ja tämä pystytään ottamaan muissa
luokissa helposti käyttöön import-lauseella:
```
import { useAthletes } from '../context/AthleteContext';
```

## Components - käyttöliittymän komponentit 
tässä kansiossa sijaitsevat käyttöliittymän komponentit: `UrheilijaForm.tsx`ja
`UrheilijaList.tsx`. Lomakkeen avulla lisätään uusi urheilija tietokantaan ja
listan avulla näytetään kaikki tietokannassa olevat urheilijat.  Näissä
tiedostoissa on sekaisin typescript logiikkaa ja HTML-tyyppistä syntaksia.
Sovelluksen tilaa hallitaan useStaten avulla, tämä on alustettu tyhjäksi
merkkijonoksi. Lukumuuttuja ja päivitysfunktio saadaan näppärästi purettua
taulukosta omiin muuttujiinsa. Urheilijaa lisättäessä annetaan syöttökenttiin
vähintään etu-ja sukunimi -tiedot. HTML-lomakekeella kytketään tila ja kenttä
yhteen. Ensin luetaan lukumuuttujasta arvo, jonka jälkeen  tapahtumankuuntelija
päivittää näppäilyn tuloksen ja renderöi tämän ruudulle. 

UrheilijaList vastaa haku- ja poistotoiminnosta, sekä kaikkien urheilijoiden
esittämisestä ruudulla. Ruudulla näkyvät urheilijat saadaan urheilija-olioita
sisältävästä listasta. Tässä käytettiin sekä globaalia tilaa, että paikallista
muokkaustilaa. Tässä vaiheessa urheilijalist.tsx alkoi kasvaa massivisiin
mittoihin, eikä se myöskään kuvannut kovin hyvin, mitä tämä komponentti tekee.
UrheilijaList ei enää näyttänyt urheilijoita, vaan se hallitsi myös haku, poisto
ja muokkaustoimintoja. Tässä vaiheessa tuli tarve refaktoroinnille ja lisätä
haku, poisto ja muokkauslomake omiin käyttöliittymäkomponentteihin. Näistä
lomakkeen eristäminen omaksi komponenetiksi oli hankalaa, koska jouduttiin
käyttämään paikallista tilanhallintaa kontekstin sijasta. 

1. **`UrheilijaForm.tsx`**: Uuden urheilijan lisäyslomake 
2. **`HaeUrheilijaTunnuksella.tsx`**: Yksittäisen urheilijan haku ID:lla ja
   saatujen tietojen esittäminen
3. **`PoistaUrheilija.tsx`**: Urheilijan poistaminen annetulla ID:lla
4. **`MuokkaaUrheilijaaForm.tsx`**: Erillinen muokkauslomake, joka saa
   muokattavan urheilijan tiedot propseina
5. **`UrheilijaList.tsx`**: Pelkkä urheilijakokoelman iterointi ja esittäminen
   ruudulla

Kokoavan juurikomponentin (`App.tsx`) tehtäväksi jäi vain näiden itsenäisten
komponenttien kytkeminen `<AthleteProvider>`:n  sisään. Tällä tavalla pääohjelma
toimi vain kapellimestarin tavoin ja kokosi elementit yhteen oikeassa
järjestyksessä. 

  ## Ongelmat ja niiden ratkaisut

 Eniten hankaluuksia aiheutti arkkitehtuurin hahmottaminen, eli tähän oli pakko
 piirtää kaaviokuvia datan liikkumisesta. Tämä lienee myös koko harjoituksen
 suurin oppi, eli miten eri abstraktiokerrokset keskustelevat keskenään. 

 Kaavio datan liikkeistä:
```
  [ Tietokanta ] 
  ▲
  │  1. HTTP Fetch (getUrheilijat, updateUrheilija...)
  ▼
  [ athleteService.ts ]
  ▲
  │  2. Palauttaa datan / vahvistuksen
  ▼
  [ AthleteProvider ]  ── (Päivittää `useState`-tilan `.map()` / `.filter()` 
  -metodeilla)
  │
  │  3. Syöttää tilan ja metodit `value={{ ... }}` -pakettiin
  ▼
  [ useAthletes() ]
  ▲
  │  4. Lukee Contextin
  ▼
  [ UrheilijaList / UrheilijaForm ]  ── (Päivittää näytön)
  ```

Koodia kirjoittaessa monesti tuli vastaan joko musta- tai valkea ruutu. Yleensä
nämä ongelmat liittyvät turvatarkistuksien puuttumiseen tai näytön renderöintiin.
Esim. jos komponentilla ei ole tilaa alustettuna ennen renderöintiä, niin
tällainen musta ruutu saattoi tulla eteen. Etenkin pitkissä tiedostoissa tuli
paljon erilaisia sulkuvirheitä, eli aina ei ollut selvää, mikä asia kuuluu
minkäkin metodin sisälle. Samanlaista ongelmaa on tosin melkein kaikkien
ohjelmointikielten kanssa. 

Tietokannan päivittämispäivittäminen ja sen epäonnistuminen. Tämä liittyi
monesti yksilöivään ID-kenttään, jonka tietokanta generoi automaattisesti. Jos
ID yritetään lisätä urheilijaa lisättäessä/ päivitettäessä, niin tämä
aiheutti  virheitä. Tässä ratkaisuna oli eristää ID muusta oliosta, jolloin
pystyttiin päivittämään urheilijaa muilta osin, mutta ID jätettiin rauhaan. 

Mietin, olisiko urheilijan syntymäaikaan riittänyt pelkästään vuosiluku, jolloin
olisin voinut käsitellä yksinkertaisempaa tietotyyppiä, kuten numeroa
päivämäärän sijasta. Urheilijaa lisätessä tiedot eivät välttämättä päivityneet
kantaan, ellei syntymäaika ollut juuri oikeassa muodossa. Myös tarkan aikaleiman
automaattinen lisääminen päivämäärän perään teki kannan päivittämisen
mahdottomaksi. Koska tietoa muunnetaan olioista tekstiksi ja tekstistä olioksi,
näitä ihmeellisiä muunnosvirheitä saattoi ilmetä myöhemmissä kehitysvaiheissa. 

# Bootstrap ja inline CSS-muotoilut

Käyttöliittymän visuaalisen tyylittelyn osalta tehtiin tietoinen rajaus:
Bootstrap-kehyksen laajempi pystytys jätettiin pois ja tilalla käytettiin
inline-tyylejä, sekä perinteisiä HTML-rakenteita. Tällä ratkaisulla säästettiin
aikaa sovelluksen ydintoiminnallisuuden, eli tietokantakyselyiden,
REST-rajapinnan, Context API-tilanhallinnan ja komponenttiarkkitehtuurin
ymmärtämiseen. 