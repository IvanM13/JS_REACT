import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  const home = 'Home Page';
  const about = 'About Page';
  return (
      <div className='App'>
    <Router>
    <div>
        <Link to="/"><Button>Home</Button> </Link>
        <Link to="/about"><Button>About</Button></Link>

    </div>

      <Routes>
        <Route path="/" element={<HomePage articles={home}/>} />

        <Route path="/about" element={<AboutPage articles={about}/>} />
      </Routes>
    </Router>
      </div>
  );
}

export default App;
