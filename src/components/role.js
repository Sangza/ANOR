import '../App.css';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

function Role() {
    const navigate = useNavigate();

    const asker = (e) => {
        e.preventDefault();
        navigate("/player/asker");
    };

    const guesser = (e) => {
        e.preventDefault();
        navigate("/player/guesser");
    };

    return (
        <div className='role'>
            <h1>Which role would you like to player in the game</h1>
            <div className='choice'>
                <button className='asker' onClick={asker}> Asker</button>
                <button className='guesser' onClick={guesser}>Guesser</button>
            </div>
        </div>
    );
};

export default Role;