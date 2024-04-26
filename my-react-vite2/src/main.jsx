// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import { createRoot } from "react-dom/client";

function NavigationBar() {
    return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<NavigationBar />);
