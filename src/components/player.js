import '../App.css';
import { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDefaults, getAccount } from '../redux/selector';
import { updateContract, updateWager} from '../redux/slice';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
// import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
// reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

function Player() {
	const [asker, setAsker] = useState(false);
	const [guesser, setGuesser] = useState(false);
	const [waiting, setwaiting] = useState(false);
	const [timeout, settimeout] = useState(false);
	const [viewContract, setViewContract] = useState(false);
	const [init, setInit] = useState(false);
	const [wagerAmt, setWagerAmt] = useState();
	const [ctc, setCtc] = useState();
	const [ctcInfoStr, setCtcInfoStr] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
	const params = useParams();
	const role = params.role;
	const account = useSelector(getAccount);
	const defaultWager = useSelector(getDefaults);

    useEffect(async(ctcInfoStr) => {
    	if(!ctcInfoStr && role === "asker") {
    		setAsker(true);
    		setInit(true);
	    	setCtc(account.contract(backend));
	    	setCtcInfoStr(JSON.stringify(await ctc.getInfo(), null, 2));
	    	dispatch(updateContract(ctc));
    	} else if(ctcInfoStr || role === "guesser") {
    		setGuesser(true);
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
    }, [ctcInfoStr, ctc, dispatch]);

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
    	if(timeout === false && role === "asker") { navigate("/play/asker"); };
    };
    const acceptTerms = (e) => {
    	e.preventDefault();
    	if(timeout === false && role === "guesser") { navigate("/play/guesser"); };
    };

	return (
		<div>
			{asker && 
				<Box>
					{init && 
						<Box>
							<h1>Please Initialize the Wager</h1>
							<Grid container spacing={2}>
								<Grid item xs={8}>
									<input value={defaultWager.defaultWager} placeholder={`The default wager amount ${defaultWager.defaultWager}`} onChange={(e) => setWagerAmt(e.currentTarget.value)} type="text"/>
								</Grid>
								<Grid item xs={4}>
									<Button variant="contained" color="primary" onClick={setWager}>Initialize Wager</Button>
								</Grid>
							</Grid>
						</Box>
					}
					{viewContract && 
						<Box>
							<h1>Copy the Contract Info below and give it to your opponent</h1>
							<Box color="primary">
								{ctcInfoStr}
							</Box>
							<Grid container spacing={2}>
								<Grid item xs={3}/>
								<Grid item xs={6}>
									<Button variant="contained" color="primary" onClick={copy}>Copy</Button>
								</Grid>
								<Grid item xs={3}/>
							</Grid>
						</Box>
					}
				</Box>
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