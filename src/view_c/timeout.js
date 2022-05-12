import '../App.css';
import { useState, useEffect } from 'react';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

function TimeOut(props) {
    return (
        <div className='timeout'>
            <h1>There's been a timeout. Someone took too long.</h1>
        </div>
    );
};

export default TimeOut;