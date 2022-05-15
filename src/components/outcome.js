import '../App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContract, getAccount } from './redux/selector';
import { updateOutcome } from './redux/slice';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const {standardUnit} = reach;
const params = useParams();

function OutCome() {
	const [outcome, setOutcome] = useState();
	const dispatch = useDispatch();
    const _fetch = useSelector();

	useEffect(() => {
		const interactInterface = {
			seeOutcome(outcome) {
				setOutcome(outcome);
			}
		};
		if(params.role == "asker") {
            backend.Asker(_fetch(getContract), interactInterface);
        } else if(params.role == "guesser") {
            backend.Guesser(_fetch(getContract), interactInterface);
        };
        dispatch(updateOutcome(outcome));
	}, []);

    return(
        <div className='outcome'>
            <h1>The Result of the game is {outcome}</h1>
            {
            	if(params.role == "asker") {
            		<h1>Your Number was {outcome.asker_number}, while your Opponents's number was {outcome.guesser_number}.</h1>;
            	} else if(params.role == "guesser") {
            		<h1>Your Number was {outcome.guesser_number}, while your Opponents's number was {outcome.asker_number}.</h1>;
           		};
            }
            <h1>You get {outcome.prize_percent}% of our Luck Pool. Which is equivalent to {(outcome.prize_percent / 100) * (2 * _fetch(getWager))} {standardUnit}.</h1>
            <h1>Your balance is {(_fetch.getAccount.balance) + ((outcome.prize_percent / 100) * (2 * _fetch(getWager)))}</h1>
        </div>
    );
};

export default OutCome;