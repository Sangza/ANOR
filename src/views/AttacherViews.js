import React from 'react';
import PlayerViews from './PlayerViews';
import Attacher from './components/Attacher';
import Header from './components/Header';
import Footer from './components/Footer';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="anor_fn_main">
          {content}
          <Header/>
          <Attacher/>
          <Footer/>
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div class="price_box">
        <h4 class="fn_title">Please paste the contract info to attach to:</h4>
        <ul className="fields">
              <li class="field">
                <div class="field_item">
                  <label for="item_desc" class="label">Contract Info</label>
                  <textarea id="item_desc" placeholder="“{ }”" spellCheck="false" onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}></textarea>
                </div>
              </li>
        </ul>
        <div className="disc_button">
          <a className="anor_fn_button small add" onClick={() => parent.attach(ctcInfoStr)} disabled={!ctcInfoStr}>Attach/a>
        </div>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div className="anor_fn_modal share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"></div>
          <div className="modal_title">Attacher (Weddy)</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">Attaching, please wait...</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {wager, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div className="anor_fn_modal share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"></div>
          <div className="modal_title">Attacher (Weddy)</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">
                The terms of the game are:
                <br /> Wager: {wager} {standardUnit}
                <br />
              </h3>
            </div>
            <div className="disc_button">
              <a className="anor_fn_button" disabled={disabled} onClick={() => {this.setState({disabled: true}); parent.termsAccepted();}}>Accept</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div className="anor_fn_modal share_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"></div>
          <div className="modal_title">Attacher (Weddy)</div>
          <div className="modal_content">
            <div className="share_title">
              <h3 className="fn_title">
                Waiting for the other player...
                <br />Think about which move you want to play.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default exports;