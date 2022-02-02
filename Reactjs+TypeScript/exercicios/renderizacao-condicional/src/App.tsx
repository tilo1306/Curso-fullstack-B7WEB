import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Ocultar" : "mostrar"}
      </button>
      {show === true && "Show está true"}
      <div>Bla bla bla...</div>
    </div>
  );
}

export default App;
