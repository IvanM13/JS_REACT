import React, { createContext, useContext, useState } from "react";
import CanvasComponent from "./components/CanvasComponent";
// import './App.css';
// const MessageContext = createContext();

// function GrandGrandChild() {
  
//   const message = useContext(MessageContext);

//   return <span>{message}</span>;
// }

// function GrandParent() {
//   return (
//     <MessageContext.Provider value="Hello from the top Context!">
//       <Parent />
//     </MessageContext.Provider>
//   )
// }

// function Parent() {
//   return <Child />;
// }

// function Child() {
//   return <GrandChild />;  
// }

// function GrandChild() {
//   return <GrandGrandChild />
// }
const ThemeContext = createContext();


const ThemedButton = () => {

  const theme = useContext(ThemeContext);

  return (
      <button style={{ background: theme.background, color: theme.foreground }}>
          Themed Button
      </button>
  );
};

const App = () => {

  const [theme, setTheme] = useState({
    background: 'ligthgray',
    foreground: 'black',
  });

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Использование React.Context</h1>
        <ThemedButton />
          <button onClick={()=>
            setTheme({
              background: 'black',
              foreground: "white",
            })
          }
          >
            Сменить тему
          </button>
      </div>
    </ThemeContext.Provider>
  );
}  



export default App;
