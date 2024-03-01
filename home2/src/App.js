import React, { Component } from 'react';
import './App.css';
import CommentsList from './components/commentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentsList />
      </div>
    );
  }
}

export default App;
