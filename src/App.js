import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const navigate = useNavigate();
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '10', standardUnit};

function App() {
  const [defaults, setDefaults] = useState({ ...defaults });
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [rules, setRules] = useState(true);
  const [connect, setConnect] = useState(false);
  // const [funding, setFunding] = useState(false);
  // const [game_choice, setGame_choice] = useState(false);
  // const [wager, setWager] = useState(false);
  // const [play, setPlay] = useState(false);
  // const [waiting, setWaiting] = useState(false);
  // const [timeout, setTimeout] = useState(false);
  // const [outcome, setOutcome] = useState(false);

  useEffect();

    const handleClick = async (e) => {
    e.preventDefault;
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(account);
    const bal = reach.formatCurrency(balAtomic, 4);

    setRules(false);
    setConnect(true);
    setAccount(acc);
    setBalance(bal);

    if(await reach.canFundFromFaucet()) {
      navigate("/fund");
    } else {
      navigate("/game_choice");
    }
  };

  return (
    <div className='App'>
      <h1>LUCK POOL</h1>
      {rules &&
       <div className='rules'>
          <h1>RULES OF THE GAME</h1>
          <p>This is a two player game - "The Asker and The Guesser". The Asker initates the game and sets the wager while the Guesser joins the game and decides whether or not to
            accept the wager. The wager paid by both the Asker and Guesser is added to our Liquidity (LUCK) Pool. The Asker selects a unique number of her choice from a given range
            of numbers (0 - 10), then the Guesser try to predict the unique number. Guess What ?? -- There are no wrong answers. If the Guesser wins, he/she is rewarded with the most 
            part of our pool. If the Asker wins, he/she is rewarded with the most part of our pool. If the is a draw, both the Asker and Guesser are rewarded with equal amount of the 
            pool. The outcome of the game is determined by our special Formula -- It calculates how far the Guesser's number is from the Asker's unique number and determines the pool
            that each player gets. 
          </p>
       </div>
      }
      {connect &&
       <div className='loading'>
        <p>Please wait while we connect to your wallet account. If this takes more than a few seconds then there is something wrong.</p>
       </div>
      }
      {(account && balance) &&
       <div className='connect'>
        <button className='connect_btn' onClick={handleClick}>{!connect ? 'Connect Wallet' : 'Loading'}</button>
       </div>
      }
      <Outlet/>
      <Player/>;
      <Asker acc={account}/>;
      <Guesser acc={account}/>;
    </div>
  )
}

export default App;