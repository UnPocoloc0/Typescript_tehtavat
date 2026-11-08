import React, { useState } from 'react';
import { useAthletes } from '../context/AthleteContext';
import type { Urheilija } from '../types/Urheilija';


interface Props {
    urheilija: Urheilija;
    onPeruuta: () => void;
}

export const MuokkaaUrheilijaaForm: React.FC<Props> = ({urheilija, onPeruuta}) => {
    
    if (!urheilija) return null;
    // Pyydetään taulukko ja Contexin tarjoama data käyttöön ja destrukturoidaan taulukko ja metodit
    const { muokkaaUrheilijaa } = useAthletes();
    const [formData, setFormData] = useState<Urheilija>(urheilija);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.id) return;
        try {
            await muokkaaUrheilijaa(formData.id, formData);
            onPeruuta();         
        } catch (err) {
            console.error('Päivitys epäonnistui:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px'}}>
            <h3>Muokkaa urheilijaa: {urheilija.etunimi} {urheilija.sukunimi}</h3>

            <div style={{ marginBottom: '8px' }}>                    
                <label>Etunimi: </label>
                    <input
                    type='text'
                    value={formData.etunimi}
                    onChange={(e) => setFormData({ ...formData, etunimi: e.target.value})}/>
            </div>
            <div style={{ marginBottom: '8px' }}>                    
                <label>Sukunimi: </label>
                    <input
                    type='text'
                    value={formData.sukunimi}
                    onChange={(e) => setFormData({ ...formData, sukunimi: e.target.value})}/>
            </div>
            <div style={{ marginBottom: '8px' }}>                    
                <label>Laji: </label>
                    <input
                    type='text'
                    value={formData.laji || ''}
                    onChange={(e) => setFormData({ ...formData, laji: e.target.value})}/>
            </div>
                <button type="submit" style={{ marginTop: '10px' }}>Tallenna Muutokset</button>
                <button type="button" onClick={onPeruuta} style={{ marginLeft: '8px'}}>Peruuta</button>
        </form>
    );
    
};

