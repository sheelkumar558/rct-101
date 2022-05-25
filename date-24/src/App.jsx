// import logo from './logo.svg';
import './App.css';
import { Timer } from './comonents/Timer';
// import Todos from './comonents/Todos';
import TodoAss from './comonents/TodoAss';

function App() {
  return (
    <div className="App">
     <TodoAss />
     {/* <Todos /> */}
     <Timer/>
    </div>
  );
}

export default App;
