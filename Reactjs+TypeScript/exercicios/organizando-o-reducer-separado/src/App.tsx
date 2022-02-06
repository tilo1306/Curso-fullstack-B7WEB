import { useContagem } from "./reducers/contage";
function App() {
  const [state, dispatch] = useContagem();
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
