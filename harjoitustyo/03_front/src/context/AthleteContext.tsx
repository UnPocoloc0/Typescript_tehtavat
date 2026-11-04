import React, {createContext, useState, useContext, type ReactNode, useEffect } from 'react';
import type { Urheilija } from '../types/Urheilija';
import { getUrheilijat, addUrheilija } from '../services/atheleteService';


// Määrittely -> Loota -> Jakelija -> Avain
// Mitä keskusvarasto sisältää
interface AthleteContextType {

    urheilijat: Urheilija[];
    lisaaUrheilija: (uusi: Omit<Urheilija, 'id'>) => Promise<void>;
}
// LOOTA: data tallennetaan tähän (Context-olio) 
// Context:ssa on sovelluksen yhteinen tila muistissa
// Annetaan datan lisäksi käyttöön funktioita yms. 
const AthleteContext = createContext<AthleteContextType | undefined>(undefined);

// JAKELIJA: Tähän kääritään koko sovellus
export const AthleteProvider: React.FC<{ children: ReactNode }> = ({ children}) => {
    // Tämä on globaali tila
    const [urheilijat, setUrheilijat] = useState<Urheilija[]>([]);

    useEffect(() => {
        // Haetaan data backendista
        getUrheilijat()
        .then((data) => setUrheilijat(data))
        .catch((err) => console.error('Haku epäonnistui:', err));

    }, []); 
    const handleLisaaUrheilija = async (uusi: Omit<Urheilija, 'id'>) => {
        try {
            const lisattyUrheilija = await addUrheilija(uusi);
            setUrheilijat((aiemmat) => [...aiemmat, lisattyUrheilija]);
            
        } catch (err) {
            console.error('Lisäys epäonnistui:', err);
            throw err; 
        }
    }

    return (
        <AthleteContext.Provider value={{ urheilijat, lisaaUrheilija: handleLisaaUrheilija }}>
            {children}
        </AthleteContext.Provider>
    );
};
// AVAIN: Työkalu, jolla avataan loota -> Custom-hook
export const useAthletes = () => {
    const context = useContext(AthleteContext);
    if (!context) {
        throw new Error('useAthletes-koukkua täytyy käyttää AtheleteProviderin sisällä');
    }
    return context;
};