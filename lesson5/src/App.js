import React, { createContext, useContext, useState } from "react";
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
const NotesContext = createContext();

const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);

const NotesList = () =>{
  const { notes } = useNotes();
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

const NoteInput = () =>{
    const [inputValue, setInputValue] = useState('');
    const { addNote } = useNotes();
    
    const handleInputChange = (event) =>{
      setInputValue(event.target.value);
    };

    const handleAddNote = () => {
      addNote(inputValue);
      setInputValue('');
    };

    return(
      <div>
        <input value={inputValue} onChange={handleInputChange}/>
        <button onClick={handleAddNote}>Добавить</button>
      </div>
    );
};

const ThemeToggle = () =>{
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === 'light' ? 'темную' : 
    'светлую'} тему</button>
  );
};

// const ThemedButton = () => {

//   const theme = useContext(ThemeContext);

//   return (
//       <button style={{ background: theme.background, color: theme.foreground }}>
//           Themed Button
//       </button>
//   );
// };

const withStyles = (WrappedComponent, styles) => {
  return (props) => {
    const newProps = {...props, styles };
    return <WrappedComponent {...newProps} />;
  };
};

const Button = ({ styles }) => {
  return (
    <button style={styles}>
      Click me
    </button>
  );
};

const StyledButton = withStyles(Button, { background: 'blue', color: 'white'});
const StyledButton2 = withStyles(Button, { background: 'green', color: 'white'});

const App = () => {
  // const [theme, setTheme] = useState('light');
  // const [notes, setNotes] = useState(['Элемент списка 1', 'Элемент списка 2']);

  // const toggleTheme = () => {
  //   setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  // };

  // const addNote = (note) =>{
  //   setNotes((prevNotes) => [...prevNotes, note]);
  // };

  // return (
  //   <ThemeContext.Provider value={{theme, toggleTheme }}>
  //     <NotesContext.Provider value={{ notes, addNote }}>
  //       <div className="content" style={{ color: theme === 'light' ? 'black' : 'white',
  //       background: theme === 'light' ? 'white' : 'black' }}>
  //         <h1>Список</h1>
  //         <ThemeToggle />
  //         <NotesList />
  //         <NoteInput />
  //       </div>
  //     </NotesContext.Provider>
  //   </ThemeContext.Provider>
  // );
  return (
    <div>
      <h1>Пример Компоненты высшего порядка (НОС) с функциональным компнентами</h1>
      <StyledButton />
      <StyledButton2 />
    </div>
  )
};



export default App;
