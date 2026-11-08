import React, {createContext, useState, useContext, type ReactNode, useEffect } from 'react';
import type { Urheilija } from '../types/Urheilija';
import { getUrheilijat, addUrheilija, getUrheilijaByID, updateUrheilija, deleteUrheilija } from '../services/atheleteService';

// Tämä vastaa siitä, mitä selaimen ruudulla näkyy juuri nyt
// Mitä palveluja keskusvarasto sisältää -> tämä on sopimus
interface AthleteContextType {
    // Taulukollinen olioita, jotka ovat Urheilija-muotin mukaisia
    urheilijat: Urheilija[];
    // ID generoroidaan luontihetkellä -> jätetään tämä vaatimus pois lisättäessä
    // Annetaan lupaus tuloksesta -> ei palauteta vastausta heti
    // Mahdollisimman selkeä nimi rajapinnasta ulospäin
    lisaaUrheilija: (uusi: Omit<Urheilija, 'id'>) => Promise<void>;
    // Parametrin on pakko olla numero -> paluuarvona kokonainen olio kaikilla olion kentillä 
    haeUrheilijaById: (id: number) => Promise<Urheilija>; 
    // Parametrina kokonainen olio muuttuneilla tiedoilla
    muokkaaUrheilijaa: (id: number, paivitetytTiedot: Urheilija) => Promise<void>;
    poistaUrheilija: (id: number) => Promise<void>;
}
// Data tallennetaan tähän (Context-olio) 
// Context:ssa on sovelluksen yhteinen tila muistissa
// Annetaan datan lisäksi käyttöön funktioita yms. 
const AthleteContext = createContext<AthleteContextType | undefined>(undefined);

// Viedään funktionaalinen komponentti ulos -> ottaa vastaan lapsielementtejä
// Node on mitä tahansa renderöitävää sisältöä
// Handle -> käsitellään jokin tapahtuma
export const AthleteProvider: React.FC<{ children: ReactNode }> = ({ children}) => {
    // Tämä on globaali tila -> useStaten alustus
    // Tila voi sisältää vain taulukollisen olioita
    // nykyinen taulukko ja funktio, jolla sitä voidaan muuttaa
    // Toiset sulkeet ovat useState:lle annettava alkuarvo -> estää kaatumisen
    const [urheilijat, setUrheilijat] = useState<Urheilija[]>([]);

    // Ajetaan vain kerran, kun komponentti syntyy
    // Alustava datan haku React-komponentissa
    useEffect(() => {
        // Haetaan data backendista palvelufunktiolla
        getUrheilijat()
        // Then -> verkkovastaus saapuu onnistuneesti perille -> parametrina annettu data. Kutsutaan tilanpäivitysfunktio
        .then((data) => setUrheilijat(data))
        // Verkkopyyntö epäonnistuu
        .catch((err) => console.error('Haku epäonnistui:', err));
    // Estää useEffectin ikuisen silmukan 
    }, []); 

    // Tapahtumankäsittelijäfunktiot:
    // Tekevät verkkopyynnön palvelimelle ja päivittävät selaimen muistin
    const handleLisaaUrheilija = async (uusi: Omit<Urheilija, 'id'>) => {
        try {
            // Tiedot back endille POST-metodilla
            const lisattyUrheilija = await addUrheilija(uusi);
            // Funktionaalinen tilan päivitys: lisätään aiempien perään uusi urheilija
            // Päivitetään selaimen muisti
            setUrheilijat((aiemmat) => [...aiemmat, lisattyUrheilija]);
            
        } catch (err) {
            console.error('Lisäys epäonnistui:', err);
            throw err; 
        }
    };
    // Ei muuta tilaa, vaan hakee tiedon rajapinnasta 
    const handleHaeUrheilijaById = async (id: number): Promise<Urheilija> => {
        try {
            return await getUrheilijaByID(id);
        } catch (err) {
            console.error(`Urheilijan haku tunnuksella ${id} epäonnistui: err`);
            throw err;
        }
    }
    // Parametrina on päivitetyn olion tiedot
    const handleMuokkaaUrheilijaa = async (id: number, paivitetytTiedot: Urheilija) => {

        try {
            // Lähettää PUT-pyynnön backendille
            const paivitetty = await updateUrheilija(id, paivitetytTiedot);
            // Päivitetään muokattu urheilija globaaliin tilaan (urheilijat)
            setUrheilijat((aiemmat) =>
            // Käydään läpi urheilijalista map-metodilla
            // Korvataan urheilija tietokannasta tulleella versiolla
                aiemmat.map((u) => (u.id === id ? paivitetty : u))
        );
        } catch (err) {
            console.error(`Urheilijan tunnuksella ${id} muokkaus epäonnistui`);
            throw err;
        }
    };
    const handlePoistaUrheilja = async (id: number) => {
        try {
            // Lähettää DELETE-pyynnön backendille
            await deleteUrheilija(id);
            // Poista urheilija ruudun muistista
            // Jätä taulukkoon kaikki urheilijat, joiden id ei ole parametrina annettu id
            setUrheilijat((aiemmat) => aiemmat.filter((u) => u.id !== id));            
        } catch (err) {
            console.error(`Urheilijan poisto tunnuksella ${id} epäonnistui`)
            throw err;
        }
    };

    // Tällä tarjoillaan tila lapsielementeille
    // Avain: rajapinnassa määritelty nimi
    // Arvo : Konreettinen toteutus (määritelty AthleteProvider:n sisällä)
    return (
        <AthleteContext.Provider 
        value={{ 
            urheilijat, 
            lisaaUrheilija: handleLisaaUrheilija,
            haeUrheilijaById: handleHaeUrheilijaById, 
            muokkaaUrheilijaa: handleMuokkaaUrheilijaa,
            poistaUrheilija: handlePoistaUrheilja }}>
            {children}
        </AthleteContext.Provider>
    );
};


// Custom-hook -> Kääritään koko Context yhteen oikopolkuun
/* eslint-disable react-refresh/only-export-components */
export const useAthletes = () => {
    // Lapsikomponentit voivat lukea Contextin arvon
    // Tässä on sen hetkinen AtheleteContex-olion arvo
    const context = useContext(AthleteContext);
    // Turvaominaisuus -> pitää kutsua komponentissa, joka on kääritty AthleteProvidein sisään
    if (!context) {
        throw new Error('useAthletes-koukkua täytyy käyttää AtheleteProviderin sisällä');
    }
    // Palautetaan kakki rajapinnan metodit
    return context;
};