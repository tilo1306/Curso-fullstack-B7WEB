import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const ShowData = () => {
  const { state, dispatch } = useContext(Context);
  const handleChangeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: "Diego",
      },
    });
  };
  return (
    <div>
      Tela ShowData de {state.user.name}
      <button onClick={handleChangeName}>Trocar nome</button>
      <br />
      <Link to="/">Voltar para SignUp</Link>
    </div>
  );
};
