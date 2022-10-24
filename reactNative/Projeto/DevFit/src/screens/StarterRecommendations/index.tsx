import React from 'react';
import {Container, HeaderText, NextButton, WorkoutList} from './styled';
import {connect} from 'react-redux';
import {Alert, Text} from 'react-native';
import workoutJson from '../../presetWorkouts.json';

const StarterRecommendations = props => {
  React.useEffect(() => {
    props.navigation.setParams({myWorkouts: props.myWorkouts});
  }, [props.myWorkouts]);
  return (
    <Container>
      <HeaderText>
        Opções de treino pré-criados com base no seu nivel.
      </HeaderText>
      <HeaderText>Você selecionou {props.myWorkouts.length} treino</HeaderText>
      <WorkoutList
        data={workoutJson}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

StarterRecommendations.navigationOptions = ({navigation}) => {
  let btnNext = 'Ignorar';

  if (navigation.state.params && navigation.state.params.myWorkouts.length) {
    btnNext = 'Concluir';
  }

  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      Alert.alert('Você precisa escolher uma opção!');
      return;
    }
    navigation.navigate('StarterRecommendations');
  };
  return {
    title: '',
    headerRight: <NextButton title={btnNext} onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarterRecommendations);
