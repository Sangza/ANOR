import '../App.css';
import { useState, useEffect } from 'react';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

function Wager(props) {
    const [showSetWager, setShowSetWager] = useState(false);
    const [showAcceptWager, setShowAcceptWager] = useState(false);

    return (
        <div className='wager'>
            {showSetWager && 
                <div className='set_wager'>
                    <h1>Set te Wager</h1>
                    <div className='input_wager'>
                        <input placeholder='Input your Wager' type='text' onChange={handleChange}/>
                    </div>
                    <div className='btn_wager'>
                        <button className='wager_btn' onClick={handleWager}>Set Wager</button>
                    </div>
                </div>
            }
            {showAcceptWager &&
                <div className='accept_wager'>
                    <h1>The Wager is {}, Do you accept the wager??</h1>
                    <div className='btn_wager'>
                        <button className='wager_btn' onClick={acceptWager}>Accept Wager</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Wager;