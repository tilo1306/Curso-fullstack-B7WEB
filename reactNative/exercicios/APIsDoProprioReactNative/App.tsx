import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Alert, Dimensions, Text} from 'react-native';

export default () => {
  useEffect(() => {
    var {height, width} = Dimensions.get('window');
    Alert.alert(height + 'x' + width);
  }, []);
  return (
    <Page>
      <Text>...</Text>
    </Page>
  );
};

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
