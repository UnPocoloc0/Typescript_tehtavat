import React, { useState } from 'react';
import { useAthletes } from '../context/AthleteContext';
import type { Urheilija } from '../types/Urheilija';

export const UrheilijaList: React.FC = () => {
    // Pyydetään taulukko
    const { urheilijat, haeUrheilijaById } = useAthletes();

    const [hakuId, setHakuId] = useState('');
    const [haettuUrheilija, setHaettuUrheilijaById] = useState<Urheilija | null>(null);

    const handleHae = async () => {

        if (!hakuId) return;
        try {
            const tulos = await haeUrheilijaById(Number(hakuId));
            setHaettuUrheilijaById(tulos);
        } catch (error) {
            alert(`Urheilijaa tunnuksella ${hakuId} ei löytynyt`);
            setHaettuUrheilijaById(null);
        }
    }


    return (
        <div>
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
            <h2>Urheilijat</h2>  
            {urheilijat.length === 0 ? (
                <p>Ei urheilijoita saatavailla.</p>
            ) : (
                <div>
                    {urheilijat.map((u, index) => (
                        <div key={u.id || index}>
                            <h3>
                                {u.etunimi} {u.sukunimi} {u.kutsumanimi  ? `("${u.kutsumanimi}")` : ''}
                            </h3>
                            <p>
                                <strong>Laji:</strong> {u.laji ||'Ei määritelty'}
                            </p>
                            {u.syntymavuosi && (
                                <p>
                                    <strong>Syntymäaika:</strong> {new Date(u.syntymavuosi).toLocaleDateString('fi-FI')}
                                </p>
                            )}
                        <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
        );
};