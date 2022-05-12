import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const navigate = useNavigate();

function GameChoice(props) {
    const asker = (e) => {
        e.preventDefault;
    };

    const guesser = (e) => {
        e.preventDefault;
    };

    return (
        <div className='game_choice'>
            <h1>Which role would you like to player in the game</h1>
            <div className='choice'>
                <button className='asker' onClick={asker}> Asker</button>
                <button className='guesser' onClick={guesser}>Guesser</button>
            </div>
        </div>
    );
};

export default GameChoice;