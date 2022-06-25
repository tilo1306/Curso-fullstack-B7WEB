import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

export default () => {
  return (
    <Page>
      <KeyBoardArea behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Logo />
        <Input />
      </KeyBoardArea>
    </Page>
  );
};

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: #000;
  margin-bottom: 20px;
`;
const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border: 1px solid #000;
`;
const KeyBoardArea = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  background-color: #ff0000;
  justify-content: center;
  align-items: center;
`;
