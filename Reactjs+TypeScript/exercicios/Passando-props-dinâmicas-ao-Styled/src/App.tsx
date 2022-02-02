import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
  color: white;
  padding: 20px;
`;
const Botao = styled.button`
  font-size: 40px;
`;

function App() {
  return (
    <Container>
      texto do componente
      <Botao>Clique aqui</Botao>
    </Container>
  );
}

export default App;
