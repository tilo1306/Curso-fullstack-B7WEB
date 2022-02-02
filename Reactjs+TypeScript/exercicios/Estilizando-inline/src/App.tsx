import { useState } from "react";

function App() {
  const [color, setColor] = useState("#FF0000");
  const [padding, setPadding] = useState(0);
  const handleClick = () => {
    setColor("#00FF00");
    setPadding(10);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          color: "white",
          border: "0",
          padding: padding,
        }}
      >
        Clique aqui
      </button>
    </div>
  );
}

export default App;
