import { useAppSelector } from "./redux/hooks/useAppSelector";

function App() {
  const user = useAppSelector((state) => state.user);
  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.
      <br />
      Tema: ...
      <hr />
      <input type="text" value={user.name} />
      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;
