import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <header className="header">
          <img src="https://banner2.kisspng.com/20180420/hwq/kisspng-skull-and-bones-skull-and-crossbones-human-skull-s-5ad9c50dee7da9.6447893415242211979769.jpg" alt="skull"></img>
        </header>
        <nav className="nav">
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Settings</a>
          </div>
        </nav>
        <div className="content">
          <img src="https://cdn.playbuzz.com/cdn/b949b7bf-cb3d-41db-81c7-e6401d9cd4c9/004f8a04-7ca1-4211-8b51-0c51ef7fd706.jpg"></img>
        </div>
      </div>
    );
  }
}

export default App;
