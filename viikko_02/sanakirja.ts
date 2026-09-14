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

  POST:
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
