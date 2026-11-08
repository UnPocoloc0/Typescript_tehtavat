// Paikallisen muistin ylläpito
import React, { useState } from 'react';
// Custom hook -> Kytkeydetään yhteiseen keskusmuistiin
import { useAthletes } from '../context/AthleteContext';
// Rajapinta varmistaa oikeat tyypit
import type { Urheilija } from '../types/Urheilija';

// Reactin funktionaalinen komponentti
export const UrheilijaList: React.FC = () => {
    
    // Pyydetään taulukko ja Contexin tarjoama data käyttöön ja destrukturoidaan taulukko ja metodit
    const { urheilijat, haeUrheilijaById, muokkaaUrheilijaa, poistaUrheilija } = useAthletes();

    // Muuttuja -> urheilija jota muokataan
    // Muutosfunktio -> asetetaan valinta
    const [hakuId, setHakuId] = useState('');
    const [haettuUrheilija, setHaettuUrheilija] = useState<Urheilija | null>(null);
    // Jos ei olla muokkaamassa -> lomake pysyy piilossa
    // Muokkaus -> Lomake täytyy urheilijan tiedoilla
    const [poistoId, setPoistoId] = useState('');
    const [valittuUrheilija, setValittuUrheilija] = useState<Urheilija | null>(null);

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

            {/* <div>
                {haettuUrheilija && (
                    <div style={{ marginTop: '10px', color: 'red' }}>
                        Löytyi: <strong>{haettuUrheilija.etunimi} {haettuUrheilija.sukunimi}</strong> ({haettuUrheilija.laji})
                    </div>
                )}
            </div> */}
           
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