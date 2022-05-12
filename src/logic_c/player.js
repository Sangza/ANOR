import { Component } from 'react';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    random() { return reach.hasRandom.random(); };
    async getNumber() {
        const number  = await new Promise(resolveHandP => {
            this.setState({resolveHandP});
        });
        this.setState({number});
        return number;
    };
    seeOutcome(i) { this.setState({outcome: intToOutcome[i]}); };
    informTimeout() { this.setState() };
    // playHand(hand) { this.state.resolveHandP(hand); };
};

export default Player;