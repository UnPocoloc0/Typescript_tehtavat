import React, {createContext, useState, useContext, ReactNode } from 'react';
import { Urheilija } from '../types/Urheilija';


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
    const [urheilijat, setUrheilijat] = useState<Urheilija[]>([]);

    return (
        <AthleteContext.Provider value={{ urheilijat }}>
            {children}
        </AthleteContext.Provider>
    );
};
// AVAIN: Työkalu, jolla avataan loota
export const useAthletes = () => {
    const context = useContext(AthleteContext);
    if (!context) {
        throw new Error('useAthletes-koukkua täytyy käyttää AtheleteProviderin sisällä');
    }
    return context;
}