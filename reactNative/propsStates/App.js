import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Hello = ({frase}) => {
  const [name, setName] = useState('Douglas');
  return <Text>Nome: {name}</Text>;
};

export default () => {
  return (
    <Page>
      <Hello />
      <Hello />
    </Page>
  );
};
