import '../App.css';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAccount, getDefaults } from '../redux/selector';
// import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const {standardUnit} = reach;

function FundAccount() {
    const [amount, setAmount] = useState();
    // const dispatch = useDispatch();
    const account = useSelector(getAccount);
    const defaults = useSelector(getDefaults);
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setAmount(e.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        await reach.fundFromFaucet(account.acc, reach.parseCurrency(amount));
        navigate("/role");
    };

    const skip = (e) => {
        e.preventDefault();
        navigate("/role");
    };

    return (
        <Box>
            <div className='bal'>
                <h1>Your Balance is currently {account.balance}</h1>
            </div>
            <h1>Do you want to fund your account with more {standardUnit}</h1>
            <div className='funding'>
                <input onChange={handleChange} placeholder={defaults.defaultFundAmt} type='text'/>
                <button className='funding_btn' onClick={handleClick}>Fund your Account</button>
            </div>
            <div className='skip'>
                <button className='skip_btn' onClick={skip}>Skip</button>
            </div>
        </Box>
    );
};

export default FundAccount;