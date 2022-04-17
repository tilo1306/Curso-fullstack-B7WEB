import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { setThemesStatus } from "./redux/reducers/themeReducer";
function App() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);
  const switchTheme = (newTheme: string) => dispatch(setThemesStatus(newTheme));
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(e.target.value));
  };
  const handleSwitchTheme = () => {
    switchTheme(theme.status === "light" ? "dark" : "light");
  };
  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.
      <br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
