import React from 'react';
import { useAthletes } from '../context/AthleteContext';

export const UrheilijaList: React.FC = () => {
    // Pyydetään taulukko
    const { urheilijat } = useAthletes();

    return (
        <div>
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