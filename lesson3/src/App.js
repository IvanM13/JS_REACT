import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ParentCounter from './components/parent';
import InputForm from './components/form';
import BorderCopm from './components/BorderComp';
import Card from './components/Card';
import ArticleDetail from '../../test/src/components/ArticleDetail';
import ArticleList from './components/ArticleList';

const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержимое статьи 1'},
  { id: 2, title: 'Статья 2', content: 'Содержимое статьи 2'},
  { id: 3, title: 'Статья 3', content: 'Содержимое статьи 3'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentCounter />
        <InputForm />

        <BorderCopm>
          <h2>Hello</h2>
          <button>Click</button>
        </BorderCopm>
        <Card title="Hello Card!"/>
        <Card title="Hello card Two!">
          <p>Любой текст здесь</p>
          <a href='#'>Link</a>
        </Card>
        <Router>
          <div>
            <h2>Приложение для просмотра статей</h2>
            <Routes>
              <Route path="/articles/:id" element={<ArticleDetail articles={articles}/>}/>
              <Route path="*" element={<ArticleList articles={articles}/>}/>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
