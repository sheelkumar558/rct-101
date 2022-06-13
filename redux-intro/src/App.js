//import logo from './logo.svg';
import "./App.css";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import { COUNT_DEC, COUNT_INC } from "./store/action.type";
import { add,div,mul,sub } from "./store/action";

function App() {
   
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <div>
        <input type="number" placeholder="x"  />
        <button onClick={() => dispatch(sub(2))}>-</button>
        <button onClick={() => dispatch( add(5) )}>+</button>
        <button onClick={() => dispatch(mul(2))}>*</button>
        <button onClick={() => dispatch(div(2))}>/</button>
      </div>
    </div>
  );
}

export default App;
