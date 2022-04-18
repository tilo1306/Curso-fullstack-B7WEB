import {useNavigate} from "react-router-dom";
import * as C from "./styles";
import {useForm, FormActions} from "../../contexts/FormContext";
import {Theme} from "../../Components/Theme";
import {ChangeEvent, useEffect} from "react";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  });

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Por favor, preencha seu nome!");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>
        <hr />
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
