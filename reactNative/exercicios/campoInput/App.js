import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

export default () => {
  return (
    <Page>
      <InputArea />
    </Page>
  );
};
const InputArea = () => {
  const [name, setName] = useState("douglas");

  return (
    <View>
      <Input value={name} onChangeText={(texto) => setName(texto)} />
      <Text>Olá {name}</Text>
    </View>
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
