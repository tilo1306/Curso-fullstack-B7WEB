/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, HeaderText, NextButton, BoldText, DaysArea} from './styled';
import {connect} from 'react-redux';
import {Alert, Text} from 'react-native';
import DefaultButton from '../../components/DefaultButton/DefaultButton';

const StarterDay = props => {
  const toggleDay = (day: number) => {
    let newWorkoutDays = [...props.workoutDays];
    if (!props.workoutDays.includes(day)) {
      newWorkoutDays.push(day);
    } else {
      newWorkoutDays = newWorkoutDays.filter(i => i !== day);
    }
    props.setWorkoutDays = [...props.workoutDays];
    props.navigation.setParams({workoutDays: newWorkoutDays});
  };

  const firstName = props.name.split(' ')[0];

  const dayWeek = [
    'domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'sabado',
  ];

  return (
    <Container>
      <HeaderText>Opa, {firstName}, tudobem ?</HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana </BoldText>você pretende treinar ?
      </HeaderText>
      <DaysArea>
        {dayWeek.map((day, index) => (
          <DefaultButton
            onPress={() => toggleDay(index)}
            bgcolor={
              props.workoutDays.includes(index.toString()) ? '#A5EBBC' : false
            }
            key={index}
            width={100}
            style={{marginBottom: 20}}
            underlayColor="#CCC">
            <Text>{day}</Text>
          </DefaultButton>
        ))}
      </DaysArea>
    </Container>
  );
};

StarterDay.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (
      !navigation.state.params ||
      !navigation.state.params.workoutDays.length
    ) {
      Alert.alert('Você precisa treinar pelo menos 1 dia!');
      return;
    }
    navigation.navigate('StarterNivel');
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
    workoutDays: state.userReducer.workoutDays,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: workoutDays =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StarterDay);
