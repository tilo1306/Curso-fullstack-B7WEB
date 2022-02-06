import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./reducers/peopleList";
function App() {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState("");
  const handleAddButton = () => {
    if (nameInput) {
      dispatch({
        type: "ADD",
        payload: {
          name: nameInput,
        },
      });
      setNameInput("");
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  const deletePerson = (id: string) => {
    dispatch({
      type: "DEL",
      payload: {
        id,
      },
    });
  };
  const handleOrderButton = () => {
    dispatch({
      type: "ORDER",
    });
  };
  return (
    <div className="p-5">
      <input
        className="border-2"
        type="text"
        value={nameInput}
        onChange={handleInputChange}
      />
      <button
        className="px-6 py-2 text-sm transition-colors duration-300 rounded rounded-full shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400/30"
        onClick={handleAddButton}
      >
        Adicionar
      </button>
      <hr />
      <button
        className="inline-flex items-center px-6 py-2 text-sm text-center rounded text-cyan-500 bg-cyan-100 hover:bg-cyan-200"
        onClick={handleOrderButton}
      >
        Ordenar
      </button>
      <br />
      lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deletePerson(item.id)}>[deletar]</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
