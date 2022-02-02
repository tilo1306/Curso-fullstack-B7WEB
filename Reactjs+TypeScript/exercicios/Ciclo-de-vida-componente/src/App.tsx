import { useEffect, useState } from "react";
function App() {
  const [nome, setNome] = useState("Douglas");
  useEffect(() => {
    alert("executou");
  }, [nome]);
  const handleClick = () => {
    setNome("Diego");
  };
  return (
    <div>
      Nome: {nome}
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}

export default App;
