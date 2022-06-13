//import logo from './logo.svg';
import './App.css';
import Navbar from './comonents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import TodoApp from './pages/TodoApp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Counter/>} />
        <Route path='/todos' element={<TodoApp/>}  />
      </Routes>
    </div>
  );
}

export default App;
