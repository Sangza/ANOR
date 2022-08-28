import React from 'react';
import Deployer from '../components/Deployer';
import Timeout from '../components/Timeout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.
exports.GetGuess = class extends React.Component {
  state={guess:0}
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div class="price_box">
        <h4 class="fn_title">
          {guess ? 'It was a draw! Pick again.' : ''}
          <br />
          {!playable ? 'Please wait...' : ''}
          <br /> 
          Guess a number between 0 and 10
        </h4>
        <ul className="fields">
              <li className="field">
                <div className="field_item">
                  <input type='number' min={0} max={10} value ={this.state.guess} onChange={(e)=>{this.setState({guess:e.target.value})}}/>
                </div>
              </li>
        </ul>
        <div className="disc_button">
          <a className="anor_fn_button" onClick={()=>parent.playGuess(this.state.guess)}>Submit Guess</a>
        </div>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div className="anor_fn_modal share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Price is Right</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">Waiting for results...</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome,price} = this.props;
    return (
      <div className="anor_fn_modal share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Thank you for playing.</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">
                The Price was : {price || 'Unknown'}
                <br></br>
                The outcome of this game was : {outcome || 'Unknown'}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <Timeout/>
    );
  }
}

export default exports;
