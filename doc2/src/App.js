import './App.css';
import Gallery from './components/Gallery';
import TodoList from './components/ToDoList';
import Bio from './components/Bio';
import Avatar from './components/Avatar';

export default function App() {
  return (
    <div>
      <Bio />
      <Gallery />
      <TodoList />
      <Avatar />
    </div>
  );
}

