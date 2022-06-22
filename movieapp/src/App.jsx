import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SingleMovies from "./components/SingleMovies";
import Error from "./components/Error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovies />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
