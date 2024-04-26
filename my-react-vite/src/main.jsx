import { createRoot } from 'react-dom/client';
import App from './App';
// import './index.css'

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);

root.render(
    <h1>Hello React!@</h1>
);