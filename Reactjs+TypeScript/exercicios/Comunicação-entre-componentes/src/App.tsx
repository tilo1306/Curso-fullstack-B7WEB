import { Button } from "./components/Button";

function App() {
  const botaoEventAction = (txt: string) => {
    alert("Frase do App" + txt);
  };
  return (
    <div className="App">
      <Button text={"Clicar no Botão"} clickFn={botaoEventAction} />
    </div>
  );
}

export default App;
