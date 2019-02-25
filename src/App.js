import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
    );
  }
}

export default App;
