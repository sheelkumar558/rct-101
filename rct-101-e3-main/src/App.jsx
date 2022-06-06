import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
       Cart - {0}
      {
       
        // Code here
      }
      <Navbar />
      <Routes>
         <Route path='' element={<Home/>} />
         <Route path="/login" element={<Login/>} />
       </Routes>
    </div>
  );
}

export default App;
