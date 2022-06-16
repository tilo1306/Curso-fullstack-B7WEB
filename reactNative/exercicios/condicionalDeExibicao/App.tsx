import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import styled from "styled-components/native";

const Area = () => {
  const [name, setName] = useState("douglas");
  const [mostrar, setMostrar] = useState(false);
  const handleClick = () => {
    setMostrar(!mostrar);
  };
  return (
    <View>
      <Input value={name} onChangeText={(t: string) => setName(t)} />
      <Button
        title={mostrar ? "Ocultar Nome" : "Mostrar Nome"}
        onPress={handleClick}
      />
      {mostrar && (
        <Quadrado>
          <Text>Seu Nome é:</Text>
          <Text>{name}</Text>
        </Quadrado>
      )}
    </View>
  );
};

export default () => {
  return (
    <Page>
      <Area />
    </Page>
  );
};

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`;
const Quadrado = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px dashed #000;
  margin-top: 30px;
`;
