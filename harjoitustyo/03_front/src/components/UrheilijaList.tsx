import React, { useState } from 'react';
import { useAthletes } from '../context/AthleteContext';
import type { Urheilija } from '../types/Urheilija';


export const UrheilijaList: React.FC = () => {
    
    // Pyydetään taulukko
    const { urheilijat, haeUrheilijaById, muokkaaUrheilijaa } = useAthletes();

    const [hakuId, setHakuId] = useState('');
    const [haettuUrheilija, setHaettuUrheilijaById] = useState<Urheilija | null>(null);
    // Muuttuja -> urheilija jota muokataan
    // Muutosfunktio -> asetetaan valinta
    const [valittuUrheilija, setValittuUrheilija] = useState<Urheilija | null>(null);


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
           
            {valittuUrheilija && (
                <div style={{ padding: '15px', border: '2px solid #007bff', marginBottom: '20px', borderRadius: '5px'}}>
                    <h3>Muokkaa urheilijaa: {valittuUrheilija.etunimi} {valittuUrheilija.sukunimi}</h3>

                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        if (!valittuUrheilija.id) return;

                        try {
                            await muokkaaUrheilijaa(valittuUrheilija.id, valittuUrheilija);
                            alert('Tiedot päivitetty!'); // Sulje lomake
                            setValittuUrheilija(null);
                        } catch (err) {
                            console.error('Muokkausvirhe:', err);
                            alert('Päivitys epäonnistui: ' + err);
                        }
                    }}>
                        <div style={{ marginBottom: '8px' }}>
                            <label>Etunimi: </label>
                            <input
                                type='text'
                                value={valittuUrheilija.etunimi}
                                onChange={(e) => setValittuUrheilija({ ...valittuUrheilija, etunimi: e.target.value})}/>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <label>Sukunimi: </label>
                            <input
                                type='text'
                                value={valittuUrheilija.sukunimi}
                                onChange={(e) => setValittuUrheilija({ ...valittuUrheilija, sukunimi: e.target.value})}/>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <label>Laji: </label>
                            <input
                                type='text'
                                value={valittuUrheilija.laji || ''}
                                onChange={(e) => setValittuUrheilija({ ...valittuUrheilija, laji: e.target.value})}/>
                        </div>
                        <button type="submit" style={{ marginRight: '10px' }}>Tallenna muutokset</button>
                        <button type="button" onClick={() => setValittuUrheilija(null)}>Peruuta</button>
                    </form>
                </div>
            )}
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
                        <button onClick={() => setValittuUrheilija(u)}>
                            Muokkaa
                        </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        );
};