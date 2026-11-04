import type { Urheilija } from '../types/Urheilija';

const API_URL = 'http://localhost:3000/api/urheilijat';

// Tämä on palvelukerros -> tekee vain kutsuja back endille
export const getUrheilijat = async (): Promise<Urheilija[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Virhe urheilijoiden hakemisessa');
    }
    return await response.json();
};

export const addUrheilija = async (uusiUrheilija: Omit<Urheilija, 'id'>): Promise<Urheilija> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uusiUrheilija),
});
    if (!response.ok) throw new Error('Virhe urheilijan lisäämisessä');
    return await response.json();
};

export const getUrheilijaByID = async (id: number): Promise <Urheilija> => {

    throw new Error('Ei toteutettu vielä'); 
};

export const updateUrheilija = async (id: number, urheilija: Urheilija): Promise<Urheilija> => {
    
    throw new Error('Ei toteutettu vielä'); 

}

export const createUrheilija = async (urheilija: Urheilija): Promise<Urheilija> => {

    throw new Error('Ei toteutettu vielä')
    
};

export const deleteUrheilija = async (id: number): Promise<void> => {
    // Ei palauta mitään

};

