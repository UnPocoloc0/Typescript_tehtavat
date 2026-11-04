import React, {createContext, useState, useContext, type ReactNode, useEffect } from 'react';
import type { Urheilija } from '../types/Urheilija';
import { getUrheilijat } from '../services/atheleteService';


// Määrittely -> Loota -> Jakelija -> Avain
// Mitä keskusvarasto sisältää
interface AthleteContextType {

    urheilijat: Urheilija[];
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

    return (
        <AthleteContext.Provider value={{ urheilijat }}>
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