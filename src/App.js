import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />

          <div className='content'>
            <Route path="/Dialogs" component={Dialogs} />
            <Route path="/Profile" component={Profile} />
            <Route path="/News" component={News} />
            <Route path="/Music" component={Music} />
            <Route path="/Setting" component={Setting} />
          </div>
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
