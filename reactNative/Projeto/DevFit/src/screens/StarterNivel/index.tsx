/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, HeaderText, NextButton, BoldText, LevelArea} from './styled';
import {connect} from 'react-redux';
import {Alert, Text} from 'react-native';
import DefaultButton from '../../components/DefaultButton/DefaultButton';

const StarterNivel = props => {
  const trainingLevel = [
    'Iniciante / Um frango',
    'Intermediário / Me viro bem',
    'Avançado / Primo do The Rock',
  ];

  const level = ['beginner', 'intermediate', 'advance'];

  let funnyPhrase = '';
  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = 'Só 1 dia não vai adiantar muito, mas ...';
      break;
    case 2:
      funnyPhrase = '2 dia eu acho porco, mas quem sou eu pra te julgar!';
      break;
    case 3:
      funnyPhrase = 'Legal, 3 dias dá pro gasto...';
      break;
    case 4:
      funnyPhrase = 'Legal, 4 dias vai ser TOP!';
      break;
    case 5:
      funnyPhrase = 'É isso ai, 5 dias é o mínimo, lets GO!';
      break;
    case 6:
      funnyPhrase = 'É, 6 dias não é pra todo mundo...';
      break;
    case 7:
      funnyPhrase = 'Wooow! Todo dia? WTF?!';
      break;
  }

  const setMyLevel = l => {
    props.setLevel(l);
    props.navigation.setParams({level: l});
  };

  return (
    <Container>
      <HeaderText>{funnyPhrase}</HeaderText>
      <HeaderText>
        <BoldText>Qual seu nivel hoje?</BoldText>
      </HeaderText>
      <LevelArea>
        {trainingLevel.map((training, index) => (
          <DefaultButton
            onPress={() => setMyLevel(level[index])}
            bgcolor={props.level == level[index] ? '#A5EBBC' : false}
            key={index}
            width={100}
            style={{marginBottom: 20}}
            underlayColor="#CCC">
            <Text>{training}</Text>
          </DefaultButton>
        ))}
      </LevelArea>
    </Container>
  );
};

StarterNivel.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      Alert.alert('Você precisa escolher uma opção!');
      return;
    }
    navigation.navigate('StarterRecommendations');
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
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StarterNivel);
