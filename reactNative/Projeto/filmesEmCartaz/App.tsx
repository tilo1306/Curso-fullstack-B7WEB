import React from 'react';
import styled from 'styled-components/native';

export default () => {
  return (
    <Page>
      <Button title="click" />
    </Page>
  );
};

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Button = styled.button``;
