import Player from './player.js';
import { Component } from 'react';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

class Guesser extends Player {
    constructor(props) {
        super(props);
        this.state = {};
    };
    // attach(ctcInfoStr) {
    //     const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    //     this.setState({view: 'Attaching'});
    //     backend.Bob(ctc, this);
    // };
    async acceptWager(wagerAtomic) {
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
        });
    };
//     termsAccepted() {
//         this.state.resolveAcceptedP();
//         this.setState({view: 'WaitingForTurn'});
//     };
};

export default Asker;