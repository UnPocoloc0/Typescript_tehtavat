// Tätä lomaketta käytetään lisäämään uusi urheilija tietokantaan
import React, { useState } from 'react';
import { useAthletes } from '..//context/AthleteContext';

// Tämä on sovelluksen moottori
export const UrheilijaForm: React.FC = () => {
    // Otetaan Contextin tarjoamasta kokonaisuudesta vain lisäysmetodi destrukturoinnilla
    const { lisaaUrheilija } = useAthletes();
    // Lomakkeen paikallinen tila -> Arvo luetaan useState-tilasta
    const [etunimi, setEtunimi] = useState('');
    const [sukunimi, setSukunimi] = useState('');
    const [laji, setLaji] = useState('');
    const [syntymavuosi, setSyntymavuosi] = useState('');

    // Funktio sijoitetaan muuttujaan
    // Tapahtumaolio -> minkälaiset ominaisuudet ja metodit on käytössä
    const handleSubmit = async (e: React.SubmitEvent) => {
    // Estetään pyyntö ladata koko sivu uudelleen -> tila säilyy muistissa
        e.preventDefault();
        // Minimivaatimus lisäämiselle
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
            // Tyhjennetään lomake tietojen syöttämisen jälkeen
            setEtunimi('');
            setSukunimi('');
            setLaji('');
            setSyntymavuosi('');   
        } catch (err) {
            console.error("Virhe lisäämisessä:", err);
            alert(`Urheilijan lisääminen epäonnistui: ${err}`);
        }
    };
// Kaapataan näppäily ja päivitetään tilaan
// Mihin tapahtuma kohdistui ja mikä tila on näppäilyn jälkeen
// Tämä on käyttöliittymän ylin "Lisää urheilija" -lomake
return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
        <h2>Lisää uusi urheilija</h2>
        <div>
            <label>Etunimi:</label>
            <input
                type="text"
                value={etunimi}
                // Elementti, johon muutos kohdistuu & sen arvo
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
                onChange={(e) => setSyntymavuosi(e.target.value)}
                />
        </div>
        <button type="submit" style={{ padding: '15px', border: '2px solid #007bff', marginTop: "20px", marginBottom: '20px', borderRadius: '5px'}}>
            Lisää urheilija
        </button>
        

    </form>
);
};
