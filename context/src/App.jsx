import React, { useContext } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
//import { CartProvider } from "./context/CartContext";
const App = () => {
  const {isLight} = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <Body />
    </div>
  );
};

export default App;

// // import logo from './logo.svg';
// import './App.css';
// import React,{useReducer} from 'react';
// const reducer =(counter,action)=> {
//   switch(action.type){
//     case "INCREMENT" :{
//       return counter+1;
//     }
//     case "DECREMENT" :{
//       return counter-1;
//     }
//     default:{
//       return counter;
//     }
//   }
// }

// function App() {
//   const [counter,dispatch] = useReducer(reducer,0);
//   return (
//     <div className="App">
//         Counter : {counter}
//         <div>
//           <button onClick={()=> dispatch({type : "INCREMENT"})}>+</button>
//           <button onClick={()=> dispatch({type : "DECREMENT"})}>-</button>

//         </div>
//     </div>
//   );
// }

// export default App;
