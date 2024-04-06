import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const userName = 'John';
    return (
      <div>
        <h1>Hello {userName}</h1>
        <Article number='1' name="Info"/>
        <Article number='2' name="Blog"/>

        <Heading />
        <Heading />
        <NewComp />
      </div>
    );
  }
}

function Article(props) {
  let tema = false;
  return ( 
    <div>
      <h2 style={{ color: tema ? 'green' : 'red'}}>Статья {props.name} про {props.number}</h2>
      <a href='#'>Читать статью</a>
    </div>
   );
}


function NewComp() {
  return (
    <div>
      <h2>New Component</h2>
    </div>
  );
}


function Heading() {
  return (
    <div>
      <h2>Новый текст внутри заголовка</h2>
      <p>Новый текст</p>
      <a href='#'> Читать далее</a>
    </div>

  );
}

export default App;
