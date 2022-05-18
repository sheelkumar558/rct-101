//import logo from './logo.svg';
import './App.css';
import Destop from './payment/Destop';
// import { useState } from 'react';
// import { Counter } from './comonents/Counter';
// import {Todo} from './comonents/Todo';
import PaymentApp from './payment/PaymentApp';
function App() {
  //const [toggle,setToggle] = useState(false);

  // if(toggle){
    return (
      <div className="App">
        <PaymentApp />
        <br />
        <Destop/>
        {/* <button onClick={()=>setToggle(!toggle)}>
         {toggle ? "Hide Everything" : "Show Components"}
        </button>
      {toggle ?  <Counter/> : <Todo/>} */}
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
