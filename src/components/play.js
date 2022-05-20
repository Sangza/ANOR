import '../App.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getContract } from '../redux/selector';
// import { updateNumber } from '../redux/slice';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

function Play(props) {
    const [number, setNumber] = useState();
    const [play, setPlay] =useState(true);
    const [waiting, setwaiting] = useState(false);
    const [timeout, settimeout] = useState(false);
    const _fetch = useSelector();
    const navigate = useNavigate();
    const params = useParams();

    const handleClick = async(e) => {
        e.preventDefault();
        const interactInterface = {
            random() { return reach.hasRandom.random(); },
            getNumber() {
                return number;
            },
            informTimeout() {
                settimeout(true);
            }
        };
        if(params.role === "asker") {
            backend.Asker(_fetch(getContract), interactInterface);
        } else if(params.role === "guesser") {
            backend.Guesser(_fetch(getContract), interactInterface);
        };
        setPlay(false);
        setwaiting(true);
        await sleep(1500);
        if(timeout === false && params.role === "asker") {
            navigate("/outcome/asker"); 
        } else if(timeout === false && params.role === "guesser") {
            navigate("/outcome/guesser"); 
        };
    };

    return (
        <div>
            {play && 
                <div className='play'>
                    <h1>Play your Unique_Number</h1>
                    <p>Remember that your number must fall in range of 0 - 10</p>
                    <div className='input_number'>
                        <input placeholder='Input your number' type='text' onChange={e => setNumber(e.target.value)}/>
                    </div>
                    <div className='btn_play'>
                        <button className='play_btn' onClick={handleClick}>Play</button>
                    </div>
                </div>
            }
            {waiting &&
                <div>
                    Waiting for the other player...
                    <br />Think about which number you want to play.
                </div>
            }
            {timeout &&
                <div>
                    There has been a Timeout...
                    <br />Somebody took too long.
                </div>
            }
        </div>
    );
};

export default Play;