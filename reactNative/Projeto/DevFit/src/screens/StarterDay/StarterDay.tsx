/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, HeaderText, NextButton, BoldText, DaysArea} from './styled';
import {connect} from 'react-redux';
import {Alert, Text} from 'react-native';
import DefaultButton from '../../components/DefaultButton/DefaultButton';

const Page = props => {
  const nextAction = () => {
    if (!props.name) {
      Alert.alert('Você precisa de um nome!');
      return;
    }
    props.navigation.navigate('StarterDias');
  };
  const handleChangeName = t => {
    props.setName(t);
    props.navigation.setParams({name: t});
  };
  const firstName = props.name.split(' ')[0];
  const dayWeek = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'sabado',
    'domingo',
  ];
  return (
    <Container>
      <HeaderText>Opa, {firstName}, tudobem ?</HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana </BoldText>você pretende treinar ?
      </HeaderText>
      <DaysArea>
        {dayWeek.map((day, index) => (
          <DefaultButton key={index} width={100} style={{marginBottom: 20}}>
            <Text>{day}</Text>
          </DefaultButton>
        ))}
      </DaysArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      Alert.alert('Você precisa de um nome!');
      return;
    }
    navigation.navigate('StarterDias');
  };
  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
