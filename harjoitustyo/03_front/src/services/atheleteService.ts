import type { Urheilija } from '../types/Urheilija';
// Estetään kirjoitusvirheet
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
        // Määritellään eksplisiittisesti
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uusiUrheilija),
});
    if (!response.ok) {
        const errorData = await response.text();
        console.error('Backendin palauttama virhe:', errorData);
        throw new Error(`Backend virhe: ${response.status} ${response.statusText}`); 
    }
    return await response.json();
};
// Otetaan vastaan urheilijan id
export const getUrheilijaByID = async (id: number): Promise <Urheilija> => {
    // Tehdään GET pyyntö muuttujien avulla (oletuksena)
    const response = await fetch(`${API_URL}/${id}`);
    if(!response.ok) {

        throw new Error(`Urheilijan haku tunnuksella ${id} epäonnistui`); 
    }
    // Olio muutetaan JSON -> Urheilija
    return await response.json();
};
// Uudet tiedot oliomuodossa
export const updateUrheilija = async (id: number, paivitetytTiedot: Urheilija): Promise<Urheilija> => {
    // Lähetetään päivityspyyntö
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(paivitetytTiedot),
    });
    if (!response.ok) {

        throw new Error(`Urheilijan päivitys tunnuksella ${id} epäonnistui.`); 
    }
    return await response.json();
}

// export const createUrheilija = async (urheilija: Urheilija): Promise<Urheilija> => {

//     throw new Error('Ei toteutettu vielä')
    
// };

export const deleteUrheilija = async (id: number): Promise<void> => {
    // Ei palauta mitään
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Urheilijan poistaminen tunnuksella ${id} epäonnistui`)
    }
};

