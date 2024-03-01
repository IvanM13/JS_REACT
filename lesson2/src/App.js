import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter';
import Show from './components/Visible';
import Timer from './components/timer';
import Comments from './components/comments';
import CommentForm from './components/commentForm';
import CommentsList from './components/commentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hello John</h1>
          <Timer />
          <Counter />
          <Show data='text'/>
          <Show data="text from components" />
        </div>
        <CommentsList />
      </div>
    );
  }
}

export default App;
