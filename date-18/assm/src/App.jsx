import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Counter } from './comonents/Counter';
import {Todo} from './comonents/Todo';
function App() {
  const [toggle,setToggle] = useState(false);

  // if(toggle){
    return (
      <div className="App">
        <button onClick={()=>setToggle(!toggle)}>
         {toggle ? "Hide Everything" : "Show Components"}
        </button>
      {toggle ?  <Counter/> : <Todo/>}
      </div>
    );
  // }else{
  //   return (
  //     <div className="App">
  //       <button onClick={()=>setToggle(!toggle)}>Toggle</button>
  //      <Todo />
  //     </div>
  //   );
  // }
}

export default App;
