import React, { createContext, useContext, useState } from "react";
import './App.css';
import ThemedButton from "./components/ThemedButton";
const MessageContext = createContext();

function GrandGrandChild() {
  
  const message = useContext(MessageContext);

  return <span>{message}</span>;
}

function GrandParent() {
  return (
    <MessageContext.Provider value="Hello from the top Context!">
      <Parent />
    </MessageContext.Provider>
  )
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;  
}

function GrandChild() {
  return <GrandGrandChild />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Пример использования React.Context</h1>
        <GrandParent />
        <ThemedButton />
      </header>
    </div>    
  );
}  



export default App;
