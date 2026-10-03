# Kehittäjän blogi-pohja

## Web-ohjelmointi, syksy 2026

### Tekijä: 2406043 Simo Loikkanen

## Viikko 1 (1.9.- 6.9.2020)

### Mitä opin tällä viikolla

* Rakensin Typescript-ympäristön WSL-koneelle, sekä kolmelle mac-koneelle
* Järjestelmistä puuttui node, npm ja nvm, sekä .zshrc-tiedosto 
* Asennuksen vaiheet: 
-* luo profiilitiedosto kotihakemistoon 
* Aja URL-osoitteen avulla
asennusskripti 
* Lataa ympäristömuuttujat -Asenna stabiili node.js -> LTS * Aseta
tsx 
* suoritusympäristö globaalisti 
* Lähdekoodi kannattaa laittaa
omaansrc-kansioon, jotta versionhallintaan ei mene ympäristön automaattisesti
generoituja tiedostoja 
* .gitignoren konfigurointi, tänne ei tule myöskään
hiekkalaatikko-tiedostot - Terminaalista koodin ajaminen pienenä testinä, tai
sitten niin, että käännetään koko projekti 
* Asensin tsx-työkalun ja laitoin sen
eri koneille globaaliksi asetukseksi -Lähdekoodin ja käännösten ero selveni
jonkun verran 
* Typescript on turvallisempi, koska mahdolliset virheet huomataan
jo koodin kirjoitusvaiheessa


### Mitä harjoituksia tein

* Kokeilin ajaa tsx-työkalun avulla yksittäisiä esimerkkejä, jolloin näin
tulosteen terminaalissa saman tien 
* Kokeilin ajaa myös kokonaista projektia,
joka muodosti js-tiedosto -> Sitten ajoin noden avulla näitä käännettyjä
tiedostoja 
* Tutustuin tsx-työkaluun, joka ei tee käännöksiä levylle ja auttaa
näkemään kehityksen tuloksen välittömästi ilman muunnosta TS -> JS



#### Harjoitus 0

* Ympäristön asentamisessa monesti profiilitiedosto puuttui
* Vaikka käänsin koodit, niin muutokset eivät kuitenkaan näkyneet nodella
js-tiedostoja ajettaessa. Jos tein uudet käännökset, niin vasta tämän jälkeen
muutokset tuli näkyväksi

* Kokeilin tehdä w3Schoolsin esimerkkien pohjalta helppoja funktioita. funktiot
joko tulostavat tai sitten palauttavat jotain. Jos funktio laitetaan
palauttamaan, niin tämä tyyppi pitää laittaa funktion määrittelyyn mukaan

#### Harjoitus 1
* Harjoittelin tyyppien tekemistä. Tyypit voivat olla ennalta määritetty ja
rajattu haluttuihin arvoihin.
Tajusin, että harjoitukset eivät ole irrallisia, vaan jokainen harjoiuksen
vaihe liittyy jollain tavalla edelliseen harjoitukseen. 

* Tehtävänantoja oli välillä hankala lukea, koska nämä olivat yhdessä pötkössä ja
ilman pilkutusta. Tämän takia oli hanakala tietää missä lauseiden rajat menivät. 
Ratkaisin tämän niin, että laitoin pitkän ohjeen paloihin ja eri riveille, jota
kävin kohta kerrallaan ratkaisemaan. Sama ajatus toimii mielestäni myös
valmiissa koodissa. 

* Vielä TypeScriptin syntaksi on vierasta. Menee sekaisin funktion parametrit
erotetaan pilkulla, samoin olion ominaisuudet. Muissa kielissä olen tottunut
puolipilkulla lopettamaan rivin

* Hankalin asia oli, jos funktion palautustyyppi oli olio. Meni todella pahasti
sekaisin, mikä on funktion parametri ja mikä on olion ominaisuus. Myös tämä
olion ominaisuuksien yhdistäminen funktion parametreihin oli hankala hahmottaa. 

* Tyypitys yleisesti on vielä todella hankala hahmottaa ja miten tämä käytännössä
eri puolilla koodia näkyy. 


#### Harjoitus 2

* Rajapintojen määrittely oli melko suoraviivasta ja myös tuttua esim. 
Java-ohjelmointikielestä. 

* Switch-case oli myös rakenteena tuttu muista kielistä

* Tein ohjelmaan myös mini-testausosion, jotta näin paremmin, mitä ohjelma tekee.
Muuten kaikki tekeminen olisi jäänyt liian teorian asteelle. 
-Hankala oli metodin paluuarvo, eli sen piti olla juuri oikeaan tyyppiä. Tämän
syntaksi oli myös vierasta. kts. shape is Circle. 

* Jos paluuarvo ei ollut mikään annetuista, niin tämän palauttaminen niin, että
kääntäjä hyväksyy paluuarvon never oli hankala toteuttaa. 

#### Harjoitus 3

* Rajapinta -> Abstraktiluokka -> Konkreettinen toteutus. Abstrakti luokka
toteuttaa rajapinnan ja konkreettinen luokka toteuttaa abstraktin luokan. 
Tämä malli on myöstuttua Javasta, vaikka käytännön kokemusta tarvitsen tähän 
paljon vielä lisää. Mutta ainakin ajatuksen tasolla ymmärrän, mistä tässä 
eriyttämisessä on kyse.

* Luokka ja sen ominaisuuksien alustaminen konstruktorilla on myös tuttua C#:sta.

* Vähän menee eri kielet sekaisin syntaksellisesti, eli Java, C#, Swift jne.
Vaikka TS-koodi muistuttaa toisia kieliä, niin muuttujan nimet voivat olla eri
järjestyksessä, kuin mihin olen muissa kielissä tottunut.

* Metodien allekirjoitus onnistui kohtalaisen hyvin, mutta kuitenkin itse metodin
runko oli hankalampi toteuttaa

* Tehtävä oli selvästi hankalampi edellisiin verrattuna ja vaati parempaa
kokonaisuuden hahmottamista. Ehkä olisin voinut kirjoittaa enemmän ylätason
kuvauksen suomenkielellä, mikä on ohjelman kokonaisarkkitehtuuri, myös
pseudokoodina, mitä ohjelma tekee jne. 

* Syntaksellisesti hankalia kohtia olivat kuvauksen muuttaminen taulukkomuotoon,
yleisen tyypin käyttäminen metodeissa, kuvauksesta arvon hakeminen, abstraktin
metodin jättäminen tyhjäksi. 
* Hyödyllinen oppi oli yläluokan metodin ylikirjoittaminen omalla
toteutuksella, samoin abstraktin metodin toteutus. Näitä pitää harjoitella
tekemään todella paljon vielä lisää. 
* Koen, että koko oliokonsepti kaipaa myös kertailua ja lisää käytännön tekemistä
ja hyvä että nämä ideat tulevat vastaan monilla eri ohjelmointikielillä.
* Tämä erottelu, perintä, ylikirjoittaminen on avainasemassa, jotta pystytään
kirjoittamaan mahdollisimman selkeää koodia

---

## Viikko 2 (6.9.- 13.9.2020)

* Melko paljon uutta asiaa tuli tällä viikolla. API-rajapinta kurssin kävin jo
viime syksynä, hyvä että nämä asiat ovat saaneet kypsyä rauhassa. Tuli kerrattua
Rest-arkkitehtuurin liittyviä konsepteja, kuten resurssien paikantamista, sekä
URI-osoitteen syntaksi, tilakoodit yms. 
* Lisäksi nuo http-verbit alkavat
pikkuhiljaa selkiytyä. JSON-tiedostomuotoon olen törmännyt monta kertaa, 
mutta tarkemmin syntaksia en
ole aiemmin miettinyt. 
* Tämän viikon iso pähkinä oli tuon CRUD-toiminnallisuuden 
rakentaminen, sekä express-frameworkin käyttöönotto.

### Mitä opin tällä viikolla

* Tällä viikolla tuli oppia niin itse koodista, kuin siihen liittyvitä
työkaluista. Työkalut saattoivat olla jopa koodia suuremmassa roolissa tai
vähintään yhtä suuressa roolissa. 
Express-kehikko, sekä Postman-sovellus. 
* Postmanista kokeilin uudemmille koneelle
työpöytäversiota, ja vanhemmille koneille Postman agent-versiota. Ilokseni
huomasin, että vanhoilla koneilla tämä agenttiversio toimii aivan mallikkaasti.
* Selaimen konsolilla oli helppo aloittaa kokeilu, mutta se ei tuntunut kuitenkaan kovin
luontevalle työkalulle esim. Postmaniin verrattuna.  

### Mitä harjoituksia tein

Postmanin lisäksi yritin tehdä pyyntöjä kehitystyökalujen konsolista. Tässä
hankaluutena oli saada pidempi pyyntö eri riveille, koska enterin jälkeen pyyntö 
lähti vajavaisena liikkeelle. Myös pyyntöjen tallettaminen ja niiden
organisointi onnistui Postmanissa helposti. 


#### Harjoitus 1

 Tiedostosta lukeminen ja polun määrittäminen. Tein pari projektia, jossa oli
lisää, hae, poista ja päivitys, eli CRUD-ominaisuudet. Viikkoharjoitus oli näistä
 suppeampi projekti, vaikka sekään ei ollut helppo. Noiden modules oli
 versionhallinnasta poistettu, 
 joten eri koneella
 työskenneltäessä, tämä kansio jäi anna uupumaan. Eli joudun tekemään
 määrityksiä eri koneella on uudestaan. Eli tällaisia riippuvuusongelmia oli
 eri koneilla, vaikka versionhallinta muuten toimii moitteettomasti. 

#### Harjoitus 2

* Yritin lähestyä back end-sovellusta ylätasolta. Eli ennen kodin kirjoittamista
yritin ymmärtää todella, mitä sovellus tekee ja miten sen pitäisi toimia.
* Seuraavaksi määrittelen suomen kielellä ohjelman vaiheet pseudokoodiin, jonka
kirjoitin kooditiedoston yläosaan. Ilman tätä suunnitteluvaihetta luulen,
että harjoituksen tekeminen ei olisi onnistunut. En kokeillut edes JavaScriptin
version tekemistä, koska ajattelen, että typeskriptin hallitsemisesta voi olla
enemmän hyötyä. 

* Middleware konseptina vielä hieman epäselvä. Huomasin kuitenkin, jos oli
puuttuvia lauseita Middlewareen liittyen, niin esimerkiksi koodi yritti parsia
väärän muotoista dataa. 
* Body osiosta tiedon purkaminen muuttujiin on vielä vähän
epäselvää. Muita ongelmia oli mm. oikeiden tyyppien päättely, tämä ei ole vielä oikein selvää.

#### Harjoitus 3

 * Harjoittelen versionhallintaa tässä samalla ja sen oikeaoppista käyttöä. Hyvin
 paljon teen todella pieniä kommitointeja ja inkrementtejä koodiin, 
 jolloin ei ole niin varaa, jos jokin
 menee rikki. Tämä tuo paljon enemmän rauhaa tekemiseen. 
 * Debuggausta kokeilin
 luentojen mukana, mutta viikkotehtävä tehdessä en Debuggeria oikein muistanut
 käyttää. 

 #### Harjoitus 4
  * Tiedostosta lukeminen ja sen muotoilu säännöllisillä lausekkeella oli
  hankalaa. 
  * Lisäksi eri käyttöjärjestelmät käsittelevät rivinvaihto hieman eri
  tavalla, ja tämän koodin pitäisi olla siinä mielessä hyvin yleispätevää. 

---

## Viikko3 (13.9.- 20.9.2020)

### Mitä opin tällä viikolla

* Tämän viikon suurin asia oli MVC-arkkitehtuuriin tutustuminen. Alkuun tuntui
todella hankalalle hahmottaa, miksi koodi on pilkottu niin moneen osaan. Metodia
kutsuu jokin toinen metodi, jonka reitti tulee vielä toisesta tiedostosta. Aikaa
kului koodin tuijottamisessa todella paljon. 
* Pidän JetBrains:n IDE:sta, joten
latasin kaikille koneelleni DataGrip-graafisen tietokantaohjelman. Kertaa olin
myös tiedonhallinta ja SQL-kurssin materiaaleja, koska tämän viikon tehtävissä
noita tietokanta kyselyitä tarvittiin. 

* Ympäristö tuntuvat toimivan hyvin,
tietokanta moottorina käytän MySQL:aa ja graafisena ympäristönä
DataGrip-sovellusta. Minulla on eri ikäisiä laitteita, joten MySQL:n oikean
version löytäminen näillä koneille oli yritystä ja erehdystä. Myös joissain
ympäristöissä graafinen puoli kaatuili, joten tämänkin vuoksi siirryin tuohon
JB:n DataGrip-sovellukseen. Tämä oli mielestäni viisas päätös.

* Tämän viikon tehtävä ei sinänsä ollut kovin pitkä, mutta
ainakin itsellä otti paljon aikaa, että ymmärsin mistä hommassa on kyse. Tuntui
myös ensimmäistä kertaa, että tässä on oikeasta back and sovelluksesta kyse,
koska tietokanta pystytään nyt manipuloimaan ohjelmallisesti. Tämä on erittäin
merkittävä saavutus ja iso oppimisen paikka. 
* Kokeilin myös ei hakemistoon sisältyvien riippuvuuksien hallintaa. Eli vaikka
kaikki projektit on koottuna tähän samaan repoon, niin alihakemistolla voi olla
omat määrityksensä. 


### Mitä harjoituksia tein

 * En ehtinyt tekemään juuri muuta kuin tuon pakollisen tehtävän. Lisäksi tein
 noita kutsuja suoraan VSCodesta. Löysin hyvän plugarin VSCoden , nimeltään Thunder Client.
 Tämän laajennuksen avulla pystyn tekemään http-kutsuja suoraan kehitysympäristösta
käsin. Tämä tuntui toimivan vielä paremmin kun Postman, tai sitten se saattaa olla
kevyemmin suojattu tms. 
* Pyynnöissä väärän protokollan käyttö aiheutti virheitä.

#### Harjoitus 1

 * Luin mallikoodia huolellisesti läpi, tiedosto kerrallaan. Yritin hahmottaa
 kokonaisuutta, eli mitä oli jo valmiiksi annettu ja mitä toiminnallisuutta
 kokonaisuuteen vielä täytyy tehdä. Kun järjestelmät kasvavat
 monimutkaisemmiksi, niin juuri tällaisissa tilanteissa koen vaikeuden kasvavan
 eksponentiaalisesti. Alkuun oli hankala hahmottaa, mihin kohti koodia uudet
 metodit sijoitetaan. Ymmärsin kuitenkin, että aina pitää olla jokin perusta
 olemassa, ennen kuin voidaan jatkaa pidemmälle. 
 * Iso oivallus oli asiakkaan
 pyynnön meneminen palvelimelle, joka ohjaa reitityksen, joka kutsuu business
 logiikkaa, josta pyyntö valitetaan palvelimelle. Joten oli helpointa aloittaa
 tietokanta kyselystä ja paketoida tämä omaan metodiin. 

 * Ongelmia oli SQL-syntaksin kanssa, esimerkiksi jos muuttujien ympäriltä puuttuivat
 yksittäiset Hipsumerkit, niin silloin tapahtui kaatuminen. Toisaalta kun
 syntaksi oli oikein, niin palvelin käynnistyi automaattisesti pystyyn. Myös
 projektin ajaminen väärästä kansiosta ei tuottanut toivottavaa lopputulosta. 
 * Olen yrittänyt pitää koko kurssin ajan ja muutenkin pienten Incremental
 filosofiaa, Eli teen todella pieniä muutoksia ja yritän kommitoida niitä
 versionhallintaan. 


---

## Viikko 4-5 (1.9.- 7.10.2020)
* Vaikka kurssin asiat ovat olleet jo tähän mennessä hankalia, nyt vaikeus sai
  aivan uuden tason. Koen, että asioiden harjoitteluun ja toistoon pitäisi jäädä
  paljon enemmän aikaa. Tiedon määrä suhteessa vapaaseen kokeiluun on aivan
  liian suuri, ja paljon jää tämän takia asioita omakstumatta. 
  Viikkotehtävä oli monelta osalta hyvin abstrakti ja vaatii todella monien
  osasten yhteensovittamista ja arkkitehtuuria. 

### Mitä opin tällä viikolla
* Otin Markdownia selvästi paremmin haltuun aiempaa verrattuna. Kävin myös
hahmottelemaan projektin rakennetta ja pienempiä vaiheita suoraan
Markdown-tiedostoon, josta kasasin itselleni ylätason kartan. Tajusin, että
otsikkohierarkiaa lisäksi pystyn tekemään otsikoiden sisälle vielä hierarkkista
jäsennystä nurisi luetteloilla ja numerot omilla bullet-l listoilla.
## Esimerkki hierarkkisesta jäsentelystä

* Ensimmäinen hierarkiataso
  * Toinen hierarkiataso
    * Kolmas hierarkiataso
  
1. hierarkia
   1. Toinen
      1. kolmas

# Skills
Yritin myös miettiä, minkälaisesta taidoista tällainen isompi projekti
koostuisi. Satojen koodirivien sijasta tulisi ensin ymmärtää, mitä koodi tekee
ylätasolla. 

* Skill 1: Projektin alustaminen 
  * npm init -y -> package.json
  * git init -> .gitignore -> e.g. nodemodules jätetään pois
* Skill 2: Riippuvuudet
  * Express
  * MySql2
  * .env
  * Kehitysaikaiset työkalut
    * npm i -D nodemon typescript @types/node
    
* Skill 3: Projektin kansiorakenne
  * MVC-patterni:
    * src/config -> Tietokantaasetukset
    * src/routes -> Opasteet
    * src/ controllers -> Sovelluslogiikka
    * src/models -> Tietokantamallit
* Skill 4: Tietokantayhteys
  * Luetaan salasanat ympäristöstä
  * Luodaan yhteysallas
  * Muutetaan asynkroniseksi ja viedään ulos
* Skill 5: Reititys & Ohjaimet
  * Pyyntö -> req.params.id tai req.body
  * Käsittely -> await Model.findById(id)
  * Vastaus -> res.status(200.json(...))
* Skill 6: Virheenkäsittely
  * try {...} cattch (error) -lohkot
* Skill 7: Testaaminen kielimallin avulla -> Claude desktop


### Mitä harjoituksia tein

 * Tein harjoituksesta kaksi erilaista versiota. Ensimmäisellä kerralla rakensin
 tuota tiekarttaa. Molemmilla kerralla oli pieniä variaatioita, vaikka itse
 sovelluksen logiikka toimii molemmissa versioissa samalla tavalla. Esim.
 * Kirjastojen asennuksissa ensimmäisellä kerralla kokeilin yhden rivin
 tekniikkaa, eli asensin kaikki tarvittavat kirjastot yhdellä komennolla.
 Toisella kerralla pidin Exploreria auki ja tsconfig.json-tiedostoa myös.
 * Yksittäisten komentojen avulla näin hyvin konkreettisesti, mitä mikäkin asennus
 tekee. Eli Explorerin ilmestyi tiedostoja ja samoin tähän konfiguraatiotiedostoon. 

* Alan vähitellen ymmärtää, että riippuvuuksia on erilaisia. Osa on varsinaisia
riippuvuuksia, ja toiset liittyvät kehitysisiin riippuvuuksiin. Varsinaisia
riippuvuuksia ovat esim. exprees ja dotenv ja kehitys aika se riippuvuuksia on
mm. tsx. Variaatiota oli myös miten tiedostojen luodaan. Voidaan käyttää
* projektista riippuen automaattista asetustiedostoihin generointia, tai sitten
pieniä tiedostoja voidaan luoda itse. 
* Paremmin aloin hahmottamaan myös ympäristömuuttujien merkityksen, eli tämä yhteystieto tietokantaan pidetään
.env-tiedostossa, jossa on konekohtaiset asetukset. Näin lähdekoodi voidaan
hallita versionhallinnassa ilman, että salasanoja tai muuta paikallisen koneen
asetuksia menee versionhallintaan mukaan. 
* import-lauseet alussa, näillä tuodaan koodin tarvittavia komponentteja mukaan,
jolloin voidaan käyttää tuodun komponentin metodeja ja ominaisuuksia. Tämä
tehtävä on sellainen, jonka todennäköisesti joudun käymään useaan kertaan läpi,
joka kerta hieman lisää tarkentaen. 

#### Harjoitus 1


* Tein  kansiorakenteen vastuiden mukaan, eli tietokannan konfiguraatio.
Tietokanta alustetaan omassa tiedostossaan, joka käyttää konfiguraatiotiedoston yhteyksiä. Varsinaiset tietokantayhteyttä hallitaan omassa
tiedostossaan. 

* Promise on käsitteenä vielä epäselvä. Ilmeisesti kyse on olion palauttamisesta
varsinaisen tiedon sijaan. Myös try-lohko voi saada kaverikseen finally-lohkon,
eli aina ei tarvitse virhettä ottaa kiinni. Finally toteutetaan, onnistuuko
ohjelman suoritus tai ei. 
* SQL-lauseissa oli jonkun verran ongelmia, eli yritin
hakea sellaista taulua, jota ei ollut olemassakaan. ? Toimii paikan pitäjänä,
johon laitetaan hakusana. Haku parametri pitäisi toimia, vaikka annettaisiin vain osa sanasta, koska tässä käytetään jokerimerkkiä.

#### Harjoitus 2

 
 * Suurin ja vaikein ongelma oli Express palvelimeen pystyttäminen. Tähän
 tiedostoon tehtiin työkalut, jotka hakevat tietokannasta kaikki opinnäytetyön
 vaiheet, sekä opinnäytetyön vaiheen kuvauksen annetun hakusanan perusteella.
 Tämä oli tehtävän varsinainen tehtävänanto. Tiedosto lukee POST-pyyntöjä.
 
 * Tiedostosta tuli melko pitkä ja sulkujen kanssa oli todella pahoja ongelmia.
 Myös tiedoston ulommat ja sisämmät kerrokset oli todella hankala hahmottaa.
 Molemmat työkalut sijaitsevat ulomman try-lohkon sisällä ja tämä try:n ja
 catch:n välinen etäisyys teki puuttuvien sulkujen löytämisestä hankalaa. 
 * Oli
 myös variaatiota työkalun nimessä, eli joskus työkalu oli kirjoitettu
 väliviivan kanssa ja joskus välilyönnin kanssa. Pieneltä tuntuva asia oli
 kuitenkin merkittävää silloin, kun työkalua kutsuttiin. Jos työkalu oli
 kirjoitettu viivan kanssa niin välilyönnillä kutsuttava nimeä ei löytynyt. 
 
 * Käytiin paljon VSCoden navigaatiomahdollisuutta, jonka avulla pystyin
 navigoimaan muuttujan määrittelyyn tai toiseen tiedostoon salamannopeasti. 
 * Ohjelman pari eri versiota. Oli myös eroa siinä, kirjoitettiin koodi niin, että
 yksi rivi teki yhden asian vai yhdistettiinkö samalle riville useampia
 komentoja. Hän tässä vaiheessa koulutusta helpompana tapaa, jossa komentoja ei
 liikaa yhdistellä, koska silloin syntaksi jää helposti vieraaksi. 

---
### Testaus
 Kokeilin myös testata ohjelmaa monin eri tavoin. Käytännössä oli kolme tapaa:
 1. curl-komento suoraan VSCoden terminaaliin. Hieman työläst tapa, mutta nuolinäppäimillä komentoa pystytään ajamaan nopeasti uudestaan. 
1. Postman osoittautui ehkä parhaaksi kyselyn tekoon. Komennot jäävät muistiin,
   jos sen vaan muistaa tallentaa. JSON-bodyyn on helppo vaihtaa esimerkiksi
   opinnäytetyön vaiheen nimeä, ja näin saadaan erilaisia vastauksia
   palvelimelta. 
2. Thunder Client:a en jostain syystä saanut samalla tavalla toimimaan kuin
   Postmania. Tässä kyllä vastaus tuli serveriltä, ja myös tavumäärä ja kulunut
   aika. Ilmeisesti tässä on tuon tietovirran kanssa jotain erilaista aiempiin
   harjoituksiin verrattuna, jonka takia ThunderClient ei näyttänyt vastauksen
   bodya.
3. Kielimallin kytkeminen onnistui myös, ja tätä pidän kyllä melkoisena ihmeenä.
   Eli tietokantaan pystyttiin tekemään kysely juttelemalla Claude chat
   kenttään. Tässä hankaluutena oli Clauden konffaus. Ilmeisesti useita
   palvelimia voidaan pitää konfiguroituna Claudessa. Ilman tätä en saanut
   haluttuja työkaluja näkyviin.      

## Viikko 5 (1.9.- 6.9.2020)

### Mitä opin tällä viikolla

Kuvaa tähän ...

### Mitä harjoituksia tein

Kuvaa tähän osioon millaisia harjoituksia teit

#### Harjoitus 1

Harjoitus 1:ssä opettelin... Ongelmaksi muodostui...

#### Harjoitus 2

Harjoitus 2:ssa opettelin...

---

## Viikko 6 (1.9.- 6.9.2020)

### Mitä opin tällä viikolla

Kuvaa tähän ...

### Mitä harjoituksia tein

Kuvaa tähän osioon millaisia harjoituksia teit

#### Harjoitus 1

Harjoitus 1:ssä opettelin... Ongelmaksi muodostui...

#### Harjoitus 2

Harjoitus 2:ssa opettelin...

---

## Viikko 7 (1.9.- 6.9.2020)

### Mitä opin tällä viikolla

Kuvaa tähän ...

### Mitä harjoituksia tein

Kuvaa tähän osioon millaisia harjoituksia teit

#### Harjoitus 1

Harjoitus 1:ssä opettelin... Ongelmaksi muodostui...

#### Harjoitus 2

Harjoitus 2:ssa opettelin...

---

## Viikko 8 (1.9.- 6.9.2020)

### Mitä opin tällä viikolla

Kuvaa tähän ...

### Mitä harjoituksia tein

Kuvaa tähän osioon millaisia harjoituksia teit

#### Harjoitus 1

Harjoitus 1:ssä opettelin... Ongelmaksi muodostui...

#### Harjoitus 2

Harjoitus 2:ssa opettelin...

---

## Viikko 9 (1.9.- 6.9.2020)

### Mitä opin tällä viikolla

Kuvaa tähän ...

### Mitä harjoituksia tein

Kuvaa tähän osioon millaisia harjoituksia teit

#### Harjoitus 1

Harjoitus 1:ssä opettelin... Ongelmaksi muodostui...

#### Harjoitus 2

Harjoitus 2:ssa opettelin...

---

\*Käytä 1 viikon mukaista pohjaa tämän ja kaikkien loppujen viikkojen toimintasi
kuvaamiseen. Arviointisi tehdään osittain myös niiden tässä blogissa kuvaamasi
toimintasi kautta.
