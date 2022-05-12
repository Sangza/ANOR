import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const navigate = useNavigate();
const {standardUnit} = reach;

function FundAccount(props) {
    const [fundAmount, setFundAmount] = useState(props.funding.amount);
    const [amount, setAmount] = useState();

    useEffect(async () => {
        await reach.fundFromFaucet(props.funding.account, reach.parseCurrency(fundAmount));
    }, [fundAmount]);

    const handleChange = (e) => {
        e.preventDefault;
        setAmount(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault;
        setFundAmount(amount);
        navigate("/game_choice");
    };

    const skip = (e) => {
        e.preventDefault;
        navigate("/game_choice");
    };

    return (
        <div className='fund'>
            <div className='bal'>
                <h1>Your Balance is currently {props.balance}</h1>
            </div>
            <h1>Do you want to fund your account with more {standardUnit}</h1>
            <div className='funding'>
                <input onChange={handleChange} placeholder={props.funding.account} type='text'/>
                <button className='funding_btn' onClick={handleClick}>Fund your Account</button>
            </div>
            <div className='skip'>
                <button className='skip_btn' onClick={skip}>Skip</button>
            </div>
        </div>
    );
};

export default FundAccount;