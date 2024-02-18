import React, { Component } from 'react';
import php from './php.png';
import './App.css';
import Hello from './components/Hello';
import Greating from './components/Greating';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={php} className='App-logo' alt="php"/>
        <Greating />
        </div>
        <Hello />
        <CurrentTime />
        <EventCard name="Info" number="1" />
        <EventCard name="Blog" number="2" />
        <EventCard name="Blog" number="3" />
        <EventCard name="Blog" number="4" />

      </div>
    );
  }
}

export default App;

