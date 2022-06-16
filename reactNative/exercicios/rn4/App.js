import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  background-color: blue;
`;

const Texto = styled.Text`
  color: red;
  font-size: 30px;
`;

export default () => {
  return (
    <Page>
      <Texto cor="red">Ola mundo</Texto>
      <Texto cor="blue">Segundo Texto legal</Texto>
      <Texto>Terceito texto</Texto>
    </Page>
  );
};
