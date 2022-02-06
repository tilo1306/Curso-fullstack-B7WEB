import { useReducer } from "react";
type reducerState = {
  count: number;
};
type reducerAction = {
  type: string;
};
function App() {
  const initialState = { count: 0 };
  const reducer = (state: reducerState, action: reducerAction) => {
    switch (action.type) {
      case "ADD":
        return { ...state, count: state.count + 1 };
      case "DEL":
        if (state.count > 0) {
          return { ...state, count: state.count - 1 };
        }
      case "RESET":
        return initialState;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-5">
      Contagem: {state.count}
      <hr />
      <button className="p-3" onClick={() => dispatch({ type: "ADD" })}>
        Adicionar
      </button>
      <button className="p-3" onClick={() => dispatch({ type: "DEL" })}>
        Remover
      </button>
      <button className="p-3" onClick={() => dispatch({ type: "RESET" })}>
        Resetar
      </button>
    </div>
  );
}

export default App;
