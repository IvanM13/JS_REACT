import './App.css';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage'
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import MyClick from './components/MyClick';
import MyCounter from './components/MyCounter';

export default function App() {
  return (
    <div className='App'>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile />
      <ShoppingList />
      <MyClick />
      <MyCounter />
    </div>
  );
}
