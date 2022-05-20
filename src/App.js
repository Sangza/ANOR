import './App.css';
import { Grid, Item, Button, Modal, Box, Divider, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAccount } from './redux/slice';
// import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [rules, setRules] = useState(true);
  const [account, setAccount] = useState();
  const [connect, setConnect] = useState(false);
  const [btn, setBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect();

    const handleClick = async (e) => {
      e.preventDefault();
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const balance = reach.formatCurrency(balAtomic, 4);
      const account = { acc, balance }

      setRules(false);
      setConnect(true);
      setAccount(account);
      dispatch(updateAccount(account));

      if(await reach.canFundFromFaucet()) {
        setBtn(false);
        setConnect(false);
        navigate("/fund");
      } else {
        setBtn(false);
        setConnect(false);
        navigate("/role");
      }
    };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}/>
        <Grid item xs={8}>
            <Box sx={{textAlign: "center"}}>
              <h1>LUCK POOL</h1>
            </Box>
            {rules &&
             <div>
                <Divider>RULES</Divider>
                <Box sx={{textAlign: "center", marginTop: 5, marginBottom: 5}}>
                  <Button variant="text" color="primary" onClick={() => setOpen(true)}>RULES OF THE GAME</Button>
                </Box>
                <Divider>RULES</Divider>
                <Modal onClose={() => setOpen(false)} open={open} aria-labelledby="title" aria-describedby="description">
                  <Box sx={style}>
                    <h1 id="title">RULES OF THE GAME</h1>
                    <p id="description">
                      This is a two player game - "The Asker and The Guesser". The Asker initates the game and sets the wager while the Guesser joins the game and decides whether or not to
                      accept the wager. The wager paid by both the Asker and Guesser is added to our Liquidity "LUCK" Pool. The Asker selects a unique number of her choice from a given range
                      of numbers "0 - 10", then the Guesser try to predict the unique number. Guess What ?? -- There are no wrong answers. If the Guesser wins, he/she is rewarded with the most 
                      part of our pool. If the Asker wins, he/she is rewarded with the most part of our pool. If the is a draw, both the Asker and Guesser are rewarded with equal amount of the 
                      pool. The outcome of the game is determined by our special Formula -- It calculates how far the Guesser's number is from the Asker's unique number and determines the pool
                      that each player gets.
                    </p>
                  </Box> 
                </Modal>
             </div>
            }
            {connect &&
             <Box sx={{textAlign: "center"}}>
              <p>Please wait while we connect to your wallet account. If this takes more than a few seconds then there is something wrong.</p>
              <CircularProgress color="secondary" />
             </Box>
            }
            {btn &&
             <Box sx={{textAlign: "center", marginTop: 5, marginBottom: 5}}>
              <Button variant="contained" color="success" onClick={handleClick}>{!connect ? 'Connect Wallet' : 'Loading....'}</Button>
             </Box>
            }
        </Grid>
        <Grid item xs={2}/>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}/>
       <Grid item xs={8}>
          <Outlet/>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
    </Box>
  );
};

export default App;