import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDefaults, getAccount } from '../redux/selector';
import { updateContract, updateWager} from '../redux/slice';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

function Player() {
	const [asker, setAsker] = useState(false);
	const [guesser, setGuesser] = useState(false);
	const [waiting, setwaiting] = useState(false);
	const [timeout, settimeout] = useState(false);
	const [viewContract, setViewContract] = useState(false);
	const [init, setInit] = useState(false);
	const _fetch = useSelector();
	const [wagerAmt, setWagerAmt] = useState(_fetch(getDefaults.defaultWager));
	const [ctc, setCtc] = useState();
	const [ctcInfoStr, setCtcInfoStr] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
	const params = useParams();

    useEffect(async() => {
    	if(!ctcInfoStr && params.role === "asker") {
    		setAsker(true);
    		setInit(true);
    		const account = _fetch(getAccount.acc);
	    	setCtc(account.contract(backend));
	    	setCtcInfoStr(JSON.stringify(await ctc.getInfo(), null, 2));
	    	dispatch(updateContract(ctc));
    	} else if(ctcInfoStr || params.role === "guesser") {
    		setGuesser(true);
    		const account = _fetch(getAccount.acc);
    		if(ctcInfoStr) {
    			setCtc(account.contract(backend, JSON.parse(ctcInfoStr)));
	    		dispatch(updateContract(ctc));

	    		const interactInterface = {
	    			informTimeout() {
	    				settimeout(true);
	    			},
	    			async acceptWager(wagerAtomic) {
	    				setWagerAmt(reach.formatCurrency(wagerAtomic, 4));
	    			}
	    		};
	    		backend.Guesser(ctc, interactInterface);
	    	};
    	};
    }, [_fetch, params, ctcInfoStr, ctc, dispatch]);

    const setWager = async(e) => {
    	e.preventDefault();
    	dispatch(updateWager(wagerAmt));
    	const interactInterface = {
    		wager: reach.parseCurrency(wagerAmt),
    		deadline: {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]
    	};
    	backend.Asker(ctc, interactInterface);
    	setViewContract(true);
    	setInit(false);
    };
    const copy = async(e) => {
    	e.preventDefault();
    	navigator.clipboard.writeText(ctcInfoStr);
    	e.target.innerHTML = 'Copied!';
    	e.target.disabled = true;
    	await sleep(1000);
    	e.target.disabled = true;
    	e.target.innerHTML = 'Copy';
    	setAsker(false);
    	setwaiting(true);
    	await sleep(10000);
    	if(timeout === false && params.role === "asker") { navigate("/play/asker"); };
    };
    const acceptTerms = (e) => {
    	e.preventDefault();
    	if(timeout === false && params.role === "guesser") { navigate("/play/guesser"); };
    };

	return (
		<div>
			{asker && 
				<div className="asker">
					{init && 
						<div className="">
							<h1>Please Initiate the Wager</h1>
							<div className="">
								<input value={_fetch(getDefaults.defaultWager)} placeholder={`The default wager amount ${_fetch(getDefaults.defaultWager)}`} onChange={(e) => setWagerAmt(e.currentTarget.value)} type="text"/>
								<button className="" onClick={setWager}>Initiate Wager</button>
							</div>
						</div>
					}
					{viewContract && 
						<div>
							<h1>Copy the Contract Info below and give it to your opponent</h1>
							<div className="">
								{ctcInfoStr}
							</div>
							<div className="copy_button">
								<button className="" onClick={copy}>Copy</button>
							</div>
						</div>
					}
				</div>
			}
			{guesser && 
				<div className="">
					<h1>Paste the Contract Info below to join the game</h1>
					<div className="">
						<textarea spellCheck="false" onChange={(e) => setCtcInfoStr(e.currentTarget.value)}/>
					</div>
					<div className="">
						<h1>{wagerAmt ? `Please accept the wager of ${wagerAmt} {standardUnit}` : 'Attach contract to view the wager'}</h1>
						<div className="">
							<button className="" onClick={acceptTerms}>Accept Terms</button>
						</div>
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
			        There's has been a Timeout...
			        <br />Somebody took too long.
			    </div>
			}
			</div>
	);
};

export default Player;