import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function handleClick(event) {
    if (event.target.innerText === "+") {
      return setCount(count + 1);
    } else {
      return setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <button onClick={handleClick}>+</button>
      {count}
      <button onClick={handleClick}>-</button>
    </div>
  );
}

export default App;
