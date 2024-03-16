import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleDetail from './components/ArticleDetail';
import ArticleList from './components/ArticleList';
import BorderCopm from './components/BorderComp';


const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержимое статьи 1' },
  { id: 2, title: 'Статья 2', content: 'Содержимое статьи 2' },
  { id: 3, title: 'Статья 3', content: 'Содержимое статьи 3' }
];


const App = () => {
  return (
    <div className='App'>
      <BorderCopm>
        <h2>Hello</h2>
        <button>Click</button>
      </BorderCopm>
      <Router>
        <div>
          <h2>Приложение для просмотра статей</h2>
          <Routes>
            <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
            <Route path="*" element={<ArticleList articles={articles} />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
