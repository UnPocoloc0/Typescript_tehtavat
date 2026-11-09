// Tämä komponentti listaa tietokantaan tallennetut urheilijat
// Paikallisen muistin ylläpito
import React, { useState } from 'react';
// Custom hook -> Kytkeydetään yhteiseen keskusmuistiin
import { useAthletes } from '../context/AthleteContext';
// Rajapinta varmistaa oikeat tyypit
import type { Urheilija } from '../types/Urheilija';
import { MuokkaaUrheilijaaForm } from './MuokkaaUrheilijaaForm';

// Reactin funktionaalinen komponentti
export const UrheilijaList: React.FC = () => {
    
    const { urheilijat } = useAthletes();
    const [valittuUrheilija, setValittuUrheilija] = useState<Urheilija | null>(null);

    return (
            
        <div>     
            <h2>Urheilijat</h2>  
            {valittuUrheilija && (
                <MuokkaaUrheilijaaForm
                urheilija={valittuUrheilija}
                onPeruuta={() => setValittuUrheilija(null)}/>
            )}
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

 