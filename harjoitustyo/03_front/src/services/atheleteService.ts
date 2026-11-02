import { Urheilija } from '../types/Urheilija';

const API_URL = 'http://localhost:3000/api/urheilijat';

// Tämä on palvelukerros
export const getUrheilijat = async (): Promise<Urheilija[]> => {

    return [];
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
