import "./App.css";

function App() {
  const mos = ["Services","Projects","About"];
  return (
    <div className="App">
    <h1>LOGOBAKERY</h1>
    <div className="Ser">
      {mos.map((e) => {
        return <div className="E">{e}</div>;
      })}
    </div>
    <button>Contact</button>
  </div>
  );
}

export default App;
