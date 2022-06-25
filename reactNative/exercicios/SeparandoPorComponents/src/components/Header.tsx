import React from 'react';
import styled from 'styled-components/native';

export default () => {
  return (
    <Header>
      <HeaderText>Texto Qualquer</HeaderText>
    </Header>
  );
};

const Header = styled.View`
  width: 100%;
  height: 60px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text``;
