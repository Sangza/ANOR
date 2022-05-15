import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import FundAccount from './components/fund';
import Role from './components/role';
import Play from './components/play';
import Player from './components/player';
import OutCome from './components/outcome';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='fund' element={<FundAccount/>
            <Route path='role' element={<Role/>}/>
            <Route path='play' element={<Play/>}>
              <Route path=':role' element={<Play/>}/>
            </Route>
            <Route path='player' element={<Player/>}>
              <Route path=':role' element={<Player/>}/>
            </Route>
            <Route path='outcome' element={<OutCome/>}>
              <Route path=':role' element={<OutCome/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);