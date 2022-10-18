/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import {
  Container,
  WelcomeText,
  WelcomeImage,
  WelcomeLogo,
  BeginConfigArea,
  ButtonText,
} from './styled';

import {NavigationProp} from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const Page = (navigate: RouterProps) => {
  const handleStart = () => {
    navigate.navigation.navigate('StarterName');
  };
  return (
    <Container>
      <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          bgcolor="#0072C0"
          underlayColor="#0B7AC6"
          onPress={handleStart}>
          <ButtonText>Iniciar Configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

Page.navigationOptions = {
  headerShown: false,
};
