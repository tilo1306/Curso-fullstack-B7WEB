import { ChangeEvent, useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={handleNameChange}
        value={name}
        placeholder="Digite seu NOME"
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={lastName}
        placeholder="Digite seu SOBRENOME"
      />
      <p>Nome Completo: {fullName}</p>
    </div>
  );
}

export default App;
