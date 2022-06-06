//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feeds from './pages/Feeds'
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
       <Routes>
         <Route path='' element={<Home/>} />
         <Route path='feeds' element={<Feeds/>} />
         <Route path='login' element={<Login/>} />
       </Routes>
    </div>
  );
}

export default App;
