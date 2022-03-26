import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../contexts/Context";

export const SignUp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state, dispatch } = useContext(Context);
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState(0);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeInput(parseInt(e.target.value));
  };
  const handleSalve = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: nameInput,
      },
    });
    dispatch({
      type: "CHANGE_AGE",
      payload: {
        name: ageInput,
      },
    });
  };
  return (
    <div>
      <h3>Tela SignUp</h3>
      <input
        type="text"
        placeholder="Digite um nome"
        value={nameInput}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Digite sua Idade"
        value={ageInput}
        onChange={handleAgeChange}
      />
      <button onClick={handleSalve}>Salvar</button>
      <Link to={"/exibir"}>Ir para ShowData</Link>
    </div>
  );
};
