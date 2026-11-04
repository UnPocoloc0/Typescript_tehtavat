import React, { useState } from 'react';
import { useAthletes } from '..//context/AthleteContext';

// Tämä on sovelluksen moottori
export const UrheilijaForm: React.FC = () => {

    const { lisaaUrheilija } = useAthletes();
    // Lomakkeen paikallinen tila
    const [etunimi, setEtunimi] = useState('');
    const [sukunimi, setSukunimi] = useState('');
    const [laji, setLaji] = useState('');
    const [syntymavuosi, setsyntymavuosi] = useState('');

    const handleSubmit = async (e: React.SubmitEvent) => {

        e.preventDefault();

        if (!etunimi || !sukunimi) {
            alert('Anna vähintään etunimi ja sukunimi!');
            return;
        }

        try {
            await lisaaUrheilija({
                etunimi,
                sukunimi,
                laji,
                syntymavuosi: syntymavuosi || undefined,
            });
            setEtunimi('');
            setSukunimi('');
            setLaji('');
            setsyntymavuosi('');   
        } catch (err) {
            console.error("Virhe lisäämisessä:", err);
            alert(`Urheilijan lisääminen epäonnistui: ${err}`);
        }
    };

return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
        <h2>Lisää uusi urheilija</h2>
        <div>
            <label>Etunimi:</label>
            <input
                type="text"
                value={etunimi}
                onChange={(e) => setEtunimi(e.target.value)}
                />
        </div>
        <div>
            <label>Sukunimi:</label>
            <input
                type="text"
                value={sukunimi}
                onChange={(e) => setSukunimi(e.target.value)}
                />
        </div>
        <div>
            <label>Laji:</label>
            <input
                type="text"
                value={laji}
                onChange={(e) => setLaji(e.target.value)}
                />
        </div>
        <div>
            <label>Syntymäaika:</label>
            <input
                type="text"
                value={syntymavuosi}
                onChange={(e) => setsyntymavuosi(e.target.value)}
                />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
            Lisää urheilija
        </button>
        

    </form>
);
};
