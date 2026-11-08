import React, { useState} from "react";
import { useAthletes } from "../context/AthleteContext";
import type { Urheilija } from "../types/Urheilija";


export const HaeUrheilijaTunnuksella: React.FC = () => {

    const { haeUrheilijaById } = useAthletes();

    const [hakuId, setHakuId] = useState('');
      const [haettuUrheilija, setHaettuUrheilija] = useState<Urheilija | null>(null);


    // Näissä metodeissa tarvitaan paikallista tilaa vs. Contextista kutsuttavat metodit
    const handleHae = async () => {
        // Haku ei voi olla tyhjä
        if (!hakuId) return;
        // Käyttäjän syöte muutetaan numeroksi
        const idNumero = Number(hakuId);
        try {
            // API vaatii numeerisen ID:n. Kutsutaan kontekstin kautta backend:a
            const tulos = await haeUrheilijaById(idNumero);
            // Saatu olio tallennetaan lokaaliin tilaan
            setHaettuUrheilija(tulos);
        } catch (error) {
            alert(`Urheilijaa tunnuksella ${hakuId} ei löytynyt`);
            setHaettuUrheilija(null);
        }
    }
    
    return (

        <div>       
            <h3>Hae urheilija ID:llä</h3>
            <input
                type="number"
                placeholder='Syötä ID'
                value={hakuId}
                onChange={(e) => setHakuId(e.target.value)}
            /> 
            <button onClick={handleHae} style={{ marginLeft: '8px' }}>Hae</button>
            {haettuUrheilija && (
                <div style={{ marginTop: '10px', color: 'green' }}>
                    Löytyi: <strong>{haettuUrheilija.etunimi} {haettuUrheilija.sukunimi}</strong> ({haettuUrheilija.laji})
                </div>
            )}
        </div>
    )


};


