import Player from './player.js';
import { Component } from 'react';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

class Asker extends Player {
    constructor(props) {
        super(props);
        this.state = {};
    };
    // setWager(wager) { this.setState({wager}); };
    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({ctc});
        this.wager = reach.parseCurrency(this.state.wager); 
        this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; 
        backend.Asker(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({ctcInfoStr});
    };
};

export default Asker;