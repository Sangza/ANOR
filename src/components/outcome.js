import '../App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContract, getWager } from '../redux/selector';
import { updateOutcome } from '../redux/slice';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;

function OutCome() {
	const [outcome, setOutcome] = useState();
	const [askerNum, setAskerNum] = useState();
	const [guesserNum, setGuesserNum] = useState();
	const dispatch = useDispatch();
    const _fetch = useSelector();
    const params = useParams();

	useEffect(() => {
		const interactInterface = {
			seeOutcome(prize_percent) {
				setOutcome(prize_percent);
			},
			seeNumbers(a, b) {
				setAskerNum(a);
				setGuesserNum(b);
			}
		};
		if(params.role === "asker") {
            backend.Asker(_fetch(getContract), interactInterface);
        } else if(params.role === "guesser") {
            backend.Guesser(_fetch(getContract), interactInterface);
        };
        dispatch(updateOutcome(outcome));
	});

	const result = () => {
		if(params.role === "asker") {
	        return <h1>Your Number was {askerNum}, while your Opponents's number was {guesserNum}.</h1>
    	} else if(params.role === "guesser") {
	        return <h1>Your Number was {guesserNum}, while your Opponents's number was {askerNum}.</h1>
	    };
	};

    return(
        <div className='outcome'>
            <div>
	    		{result()}
            </div>
            <h1>You get {outcome}% of our Luck Pool. Which is equivalent to {(outcome / 100) * (2 * _fetch(getWager))} {standardUnit}.</h1>
            <h1>Your balance is {(_fetch.getAccount.balance) + ((outcome / 100) * (2 * _fetch(getWager)))}</h1>
        </div>
    );
};

export default OutCome;