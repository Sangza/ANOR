import React from 'react';
import Footer from '../components/Footer';
import Connect from '../components/Connect';
import Discover from '../components/Discover';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    let connected = false;
    return (
      <div className="anor_fn_main">
          <div id="preloader">
            <div className="loader">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="wrap-text"> 
                <div className="text">
                  <span>L</span>
                  <span>O</span>
                  <span>A</span>
                  <span>D</span>
                  <span>I</span>
                  <span>N</span>
                  <span>G</span>
                  <span>...</span>
                </div>
              </div>
            </div>
            <div className="loader-text">wait please</div>
          </div>
          <header className="anor_fn_header">
            <div className="container">
              <div className="header_in">
                
                <div className="header_left">
                  <div className="fn_logo">
                    <a><img src=".../public/img/logo.png" alt=""/></a>
                  </div>
                  <div className="nav_list">
                    <ul className="main_menu">
                      <li><a>Play Game</a></li>
                      <li><a>Fund Account</a></li>
                      <li><a>View NFTs</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="header_right">
                  <div className="fn_signin">
                    {connected ? 
                      <h3 className="fn_title">Connected</h3> :
                      <a className="anor_fn_button small anor_fn_share_item" 
                        onClick={
                            () => {
                            parent.connectWallet;
                            connected = true
                            }
                          }>
                        Connect Wallet
                      </a>
                    }
                  </div>
                </div>
                
              </div>
            </div>
          </header>

          <div className="anor_fn_mobile_menu">
            <div className="mobile_menu_inner">
              <div className="mobile_in">
                <div className="logo">
                  <a><img src=".../public/img/mobile-logo.png" alt="" /></a>
                </div>
                <div className="trigger">
                  <div className="hamburger hamburger--slider">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown_inner">
                <ul className="vert_menu">
                  <li><a>Play Game</a></li>
                  <li><a>Fund Account</a></li>
                  <li><a>View NFTs</a></li>
                </ul>
              </div>
            </div>
          </div>
          {content}
          <Discover/>
          <Footer/>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <Connect/>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div className="anor_fn_modal report_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Fund Your Account</div>
          <div className="modal_content">
            <h3 className="fn_title">Balance: {bal} {standardUnit}</h3>
            <p className="fn_desc">
              Would you like to fund your account with additional {standardUnit}?
              <br />
              (This only works on certain devnets)
            </p>
            <ul className="fields">
              <li className="field">
                <div className="field_item">
                  <input type='number' placeholder={defaultFundAmt} onChange={(e) => this.setState({amt: e.currentTarget.value})}/>
                </div>
              </li>
              <li className="field">
                <div className="field_item">
                  <div className="links">
                    <a className="anor_fn_button small add" onClick={() => parent.fundAccount(amt)}>Fund Account</a>
                    <a className="cancel" onClick={() => parent.skipFundAccount()}>Skip</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {parent} = this.props;
    return (
      <div className="anor_fn_modal report_box">
        <div className="modal_in">
          <div className="modal_closer"><img src=".../public/svg/cancel.svg" alt="" className="fn__svg"/></div>
          <div className="modal_title">Roles</div>
          <div className="modal_content">
            <h3 className="fn_title">Please select a role:</h3>
            <p className="fn_desc">
              The Deployer set the wager, deploy the contract.
              <br />
              The Attacher attach to the Deployer's contract.
            </p>
            <form>
              <select>
                <option disabled>Select a role</option>
                <option onClick={() => this.setState({value : "deployer"})}>Deployer</option>
                <option onClick={() => this.setState({value : "attacher"})}>Attacher</option>
              </select>
              <div className="clearfix"></div>
              <input type="submit" onClick={() => (this.state.value === "deployer") ? parent.selectDeployer() : parent.selectAttacher()}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default exports;