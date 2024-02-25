import React, { Component } from 'react';
import './App.css';
import Message from './components/Message';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Message name="John" />
          <Message name="Jim" />
          <Message name="Kate" />
          <Message name="Bob" />
          <Message name="Ronni" />
          <Message name="Rob" />
        </div>
      </div>
    );
  }
}

export default App;
