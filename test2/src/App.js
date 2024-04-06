import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleDetail from './components/ArticleDetail';
import ArticleList from './components/ArticleList';
import BorderCopm from './components/BorderComp';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';


const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержимое статьи 1' },
  { id: 2, title: 'Статья 2', content: 'Содержимое статьи 2' },
  { id: 3, title: 'Статья 3', content: 'Содержимое статьи 3' },
  { id: 4, title: 'Статья 4', content: 'Содержимое статьи 4' }
];

const products = [
  { id: 1, name: "Товар 1", description: "Описание товара 1", price: "100 руб." },
  { id: 2, name: "Товар 2", description: "Описание товара 2", price: "200 руб." },
  { id: 3, name: "Товар 3", description: "Описание товара 3", price: "300 руб." },
  { id: 4, name: "Товар 4", description: "Описание товара 4", price: "400 руб." },
  { id: 5, name: "Товар 5", description: "Описание товара 5", price: "500 руб." },
  { id: 6, name: "Товар 6", description: "Описание товара 6", price: "600 руб." },
  { id: 7, name: "Товар 7", description: "Описание товара 7", price: "700 руб." },
  { id: 8, name: "Товар 8", description: "Описание товара 8", price: "800 руб." },
  { id: 9, name: "Товар 9", description: "Описание товара 9", price: "900 руб." },
];


const App = () => {
  return (
    <div>
        <div className='App'>
        <BorderCopm>
          <h2>Hello</h2>
          <button>Click</button>
        </BorderCopm>
      </div>
      <Router>
        <div>
          <h1>Приложение для просмотра статей</h1>
          <Routes>
            <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
            <Route path="*" element={<ArticleList articles={articles} />} />
          </Routes>
        </div>
      </Router>
      <Router>
        <Routes>
          <Route path='/page/:pageNumber' element={<ProductList products={products} />} />
          <Route path='/product/:productId' element={<ProductDetail products={products} />} />
          <Route path="/" element={<ProductList products={products} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
