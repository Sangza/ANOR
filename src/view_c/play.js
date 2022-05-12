import '../App.css';
import { useState, useEffect } from 'react';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

function Play(props) {
    return (
        <div className='play'>
            <h1>Play your Number</h1>
            <p>Remember that your number must fall in range of 0 - 10</p>
            <div className='input_number'>
                <input placeholder='Input your number' type='text' onChange={handleChange}/>
            </div>
            <div className='btn_play'>
                <button className='play_btn' onClick={handleClick}>Play</button>
            </div>
        </div>
    );
};

export default Play;