import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";


function App() {
  const [counter, setCounter] = useState(0);

  const handleDuble = () => {
    setCounter(counter * 2);
  };

  const handleChange = (value) => {
    
    setCounter(counter + value);
  };

  
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Sub 1
      </button>
      <button onClick={handleDuble}>double</button>
      <div>
        Color -- <button className={`${counter%2===0 ? "even" : "odd"}`}>{counter}</button> 
        </div>
        <Todo />
    </div>
  );
}

export default App;
