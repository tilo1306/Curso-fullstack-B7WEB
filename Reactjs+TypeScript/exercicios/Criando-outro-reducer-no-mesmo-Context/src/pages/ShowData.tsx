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
      <h3>Tela ShowData</h3>
      {state.user.name && (
        <>
          Meu nome é: {state.user.name}
          <br />
          Eu tenho {state.user.age} anos.
          <br />
        </>
      )}
      {!state.user.name && "Não há Informações"}
      <Link to="/">Voltar para SignUp</Link>
    </div>
  );
};
