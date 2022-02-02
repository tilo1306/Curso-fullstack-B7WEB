import { Pessoas } from "./components/Pessoas";

function App() {
  let list = [
    { name: "bonieky", age: 90 },
    { name: "joão", age: 20 },
    { name: "pedro", age: 50 },
    { name: "samanta", age: 15 },
    { name: "maria", age: 75 },
  ];
  return (
    <div className="App">
      <h2>Lista de presença</h2>
      <ul>
        {list.map((lista, index) => (
          <Pessoas key={index} data={lista} />
        ))}
      </ul>
    </div>
  );
}

export default App;
