import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar>
            <Routes />
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default App;
