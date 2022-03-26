import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const SignUp = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      Tela SignUp de {state.user.name} que tem {state.user.age} anos.
      <br />
      <Link to={"/exibir"}>Ir para ShowData</Link>
    </div>
  );
};
