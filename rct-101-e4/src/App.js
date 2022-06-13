import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequiredAuth from './hoc/RequiredAuth'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return <div className="App">
    {/* code here */}
    <Navbar/>
     <Routes>
     <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      
     </Routes>
    </div>;
}

export default App;
