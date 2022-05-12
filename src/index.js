import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FundAccount from './view_c/fund';
import GameChoice from './view_c/game_choice';
import Wager from './view_c/wager';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/fund' element={<FundAccount funding={{amount : defaults.defaultFundAmt, account, balance}}/>}/>
          <Route path='/game_choice' element={<GameChoice/>}>
            <Route path='/game_choice/:player' element={<Wager/>}/>
          </Route>
          <Route path='/play' element={<Play/>}/>
          <Route path='/waiting' element={<Waiting/>}/>
          <Route path='/timeout' element={<TimeOut/>}/>
          <Route path='/outcome' element={<OutCome/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);