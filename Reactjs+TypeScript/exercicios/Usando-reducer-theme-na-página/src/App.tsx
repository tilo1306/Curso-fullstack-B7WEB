import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";
import { useContext } from "react";
import { Context } from "./contexts/Context";
const App = () => {
  const { state, dispatch } = useContext(Context);
  const handleSwitchTheme = () => {
    if (state.theme.status === "light") {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "dark",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "light",
        },
      });
    }
  };
  return (
    <div
      style={{
        backgroundColor: state.theme.status === "light" ? "#FFF" : "#000",
        color: state.theme.status === "light" ? "#000" : "#FFF",
      }}
    >
      <BrowserRouter>
        <h1>Titulo da Pagina</h1>
        Tema:{state.theme.status}
        <button onClick={handleSwitchTheme}>Switch Theme</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
