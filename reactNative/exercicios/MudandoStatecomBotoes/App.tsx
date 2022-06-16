import React, { useState } from "react";
import { SafeAreaView, Text, Button, View } from "react-native";
import styled from "styled-components/native";

const Area = () => {
  const [name, setName] = useState("douglas");
  const [backupName, setBackupName] = useState("");
  return (
    <View>
      <Input value={name} onChangeText={(t) => setName(t)} />
      <Button title="salvar" onPress={() => setBackupName(name)} />
      <Text>{backupName}</Text>
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
