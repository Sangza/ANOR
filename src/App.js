import './App.css';
import { Grid, Item, Button, Modal, Box, Divider, CircularProgress } from '@mui/material';
import { useState } from 'react';
import ErrorBoundary from './components/error';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAccount } from './redux/slice';
// import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
// import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setProviderByName("LocalHost");
// reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

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
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect();

    const handleClick = async (e) => {
      e.preventDefault();

      // const acc = await reach.getDefaultAccount();
      // const balAtomic = await reach.balanceOf(acc);
      // const balance = reach.formatCurrency(balAtomic, 4);
      // const account = { acc, balance }

      const account = await reach.newTestAccount(reach.parseCurrency(100));

      account.then((acc) => {
        setAccount(acc);
        dispatch(updateAccount(acc));
        setRules(false);
        setConnect(true);
        if(reach.canFundFromFaucet()) {
          navigate("/fund");
        } else {
          // navigate("/role");
          console.log(account);
        };
      }).catch((error) => console.log(error))
    };

  return (
    <ErrorBoundary>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}/>
          <Grid item xs={8}>
              <Box sx={{textAlign: "center"}}>
                <h1>GuessNik</h1>
              </Box>
              {rules &&
               <div>
                  <Divider>RULES</Divider>
                  <Box sx={{textAlign: "center", marginTop: 5, marginBottom: 5}}>
                    <Button variant="text" color="primary" onClick={() => setOpen(true)}>Rules of GuessNik</Button>
                  </Box>
                  <Divider>RULES</Divider>
                  <Modal onClose={() => setOpen(false)} open={open} aria-labelledby="title" aria-describedby="description">
                    <Box sx={style}>
                      <h1 id="title">Rules of GuessNik</h1>
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
              {(connect && !account) &&
               <Box sx={{textAlign: "center"}}>
                <p>Please wait while we connect to your wallet account. If this takes more than a few seconds then there is something wrong.</p>
                <CircularProgress color="primary" />
               </Box>
              }
              {!account &&
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
    </ErrorBoundary>
  );
};

export default App;