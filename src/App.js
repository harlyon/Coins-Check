import React, { Component } from 'react';
import './App.css';
import Today from './Components/Today';
import History from './Components/History';

class App extends Component {
  render() {
    return (
         <div className="">
              <div className="topheader">
                  <header className="container">
                      <nav className="navbar">
                          <div className="navbar-brand">
                              <span className="navbar-item">Coin-Price</span>
                          </div>
                      </nav>
                  </header>
              </div>
              <section className="results--section">
                  <div className="container">
                      <h1>Realtime Crypto - Price information </h1><br />
                  </div>
                  <div className="results--section__inner">
                      <Today />
                      <History />
                  </div>
              </section>
          </div>
    );
  }
}

export default App;
