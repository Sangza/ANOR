import '../App.css';
import { useState, useEffect } from 'react';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const {standardUnit} = reach;

function OutCome(props) {
    return(
        <div className='outcome'>
            <h1>{outcome}</h1>
            <h1>You get {percent}% of our Luck Pool. Which is equivalent to {prize}{standardUnit}.</h1>
            <h1>Your balance is {balance}</h1>
        </div>
    );
};

export default OutCome;