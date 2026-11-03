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
                <ul>
                    {urheilijat.map((u, index) => (
                        <li key={u.id || index}>
                            {u.etunimi} {u.sukunimi}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        );
};