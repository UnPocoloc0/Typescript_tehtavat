import React, { useState} from "react";
import { useAthletes } from "../context/AthleteContext";

export const PoistaUrheilijaTunnuksella: React.FC = () => {

    const { poistaUrheilija } = useAthletes();

       // Jos ei olla muokkaamassa -> lomake pysyy piilossa
        // Muokkaus -> Lomake täytyy urheilijan tiedoilla
        const [poistoId, setPoistoId] = useState('');

        const handlePoistaIdlla = async () => {
        // ID = tietokannassa oleva tunniste
        if (!poistoId) return;

        const idNumero = Number(poistoId);
        if (window.confirm(`Haluatko varmasti poistaa urheilijan ID:lla ${idNumero}?`)) {
            try {
                // Kutsutaan Contextin poistometodia
                await poistaUrheilija(idNumero);
                alert(`Urheilija tunnuksella ${idNumero} poistettu onnistuneesti`);
                setPoistoId('');
                
            } catch (err) {
                alert(`Poisto epäonnistui: Urheilijaa tunnuksella ${idNumero} ei löytynyt`);
            }
        }
    };

    return (
        <div>
            <h3>Poista urheilija ID:llä</h3>
            <input
                type="number"
                placeholder='Syötä ID'
                value={poistoId}
                onChange={(e) => setPoistoId(e.target.value)}
            /> 
            <button 
            onClick={handlePoistaIdlla} 
            style={{ marginLeft: '8px', color: 'white', backgroundColor: 'red', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>Poista</button>
        </div>
    )
};