import React, { useState } from 'react';
import { useAtheltes } from '..//context/AthleteContext';

// Tämä on sovelluksen moottori
export const UrheilijaForm: React.FC = () => {

    const { lisaaUrheilija } = useAtheltes();

    const [etunimi, setEtunimi] = useState('');
    const [sukunimi, setSukunimi] = useState('');
    const [laji, setLaji] = useState('');
    const [syntymaaika, setsyntymaaika] = useState('');

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
                syntymaaika: syntymaaika || undefined,
            });
            setEtunimi('');
            setSukunimi('');
            setLaji('');
            setsyntymaaika('');   
        } catch (err) {
            alert('Urheilijan lisääminen epäonnistui')
        }
    }

    )
};