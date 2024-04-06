import './App.css';
import ButtonUsage from './components/ButtonUsage';
import Box from './components/Box';
import pic from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonUsage />
        <Box> <p>First</p></Box>
        <Box> <p>Second</p></Box>
        <Box> <img src={pic}/></Box>
      </header>
    </div>
  );
}

export default App;
