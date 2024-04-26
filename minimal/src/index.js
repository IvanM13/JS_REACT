import { createRoot } from "react-dom/client";
import App from './App';

const rootNode = document.getElementById("root");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
  <div>
    <h1>Hello React!</h1>
    <h3>Hi createRoot</h3>
    <App />
  </div>
);