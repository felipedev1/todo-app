import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react';
import { HashRouter } from 'react-router-dom'
import Menu from '../template/Menu'
import Routes from './routes'

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Menu />
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
