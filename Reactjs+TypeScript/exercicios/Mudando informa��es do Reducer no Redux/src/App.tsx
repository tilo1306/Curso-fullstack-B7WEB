import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";

function App() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(e.target.value));
  };
  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.
      <br />
      Tema: ...
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;
